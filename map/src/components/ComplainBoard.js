import React, { useState, useMemo, useEffect } from "react";
import ComplainCard from "./ComplainCard";
import AddButton from "./AddButton";
import NewPostit from "./NewPostIt";
import RecentLine from "./RecentLine";
import {
  AddButtonContainer,
  BoardContainer,
  ButtonWrap,
  Card,
  CloseButton,
  Content,
  FoldedCorner,
  GridContainer,
  GridItem,
  GridRow,
  PostItWrapper,
  Wrapper,
} from "../styles/ComplainBoard.styles";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { StyledLikeButton } from "../styles/ComplainCard.styles";


const ROW_COLORS = {
  1: ["#F8BDBD"],
  2: ["#C5CAE9", "#DCEFBF", "#FFF59D"],
  3: ["#C3AEE5", "#A0D3FA"],
};

function calculateSpans(cards) {
  const sorted = [...cards].sort((a, b) => b.likes - a.likes);
  const order = [0, 5, 4, 2, 1, 3];
  const rows = { 1: [], 2: [], 3: [] };

  order.forEach((sortedIdx, placementIdx) => {
    const card = sorted[sortedIdx];
    if (!card) return;

    if (placementIdx === 0) rows[1].push(card);
    else if (placementIdx >= 1 && placementIdx <= 3) rows[2].push(card);
    else rows[3].push(card);
  });

  const spans = [];
  Object.entries(rows).forEach(([row, rowCards]) => {
    const totalLikes = rowCards.reduce((sum, c) => sum + c.likes, 0);
    rowCards.forEach((card) => {
      const ratio = card.likes / totalLikes;
      const span = ratio * 12;
      spans.push({ ...card, row: Number(row), span: Math.max(span, 1) });
    });
  });

  return spans;
}

function ComplainBoard({ isOpen, buildingName, onClose }) {
  const [isAdding, setIsAdding] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = collection(db, buildingName);
      const res = await getDocs(ref);
      setCards(res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      }))
    }
    fetchData();
  }, [buildingName]);

  const cardsWithSpans = useMemo(() => calculateSpans(cards), [cards]);


  if (!isOpen) return null;

  const handleSubmit = async (text) => {
    const user = auth.currentUser;
    const createdAt = Date.now();
    const newCard = {
      user: user.uid,
      createdAt: createdAt,
      content: text,
      likes: 0,
      likedBy: []
    };
    setCards([newCard, ...cards]);
    setIsAdding(false);
    const ref = doc(db, buildingName, String(createdAt));
    await setDoc(ref, newCard);
  };

  const handleLike = async (createdAt) => {
    const user = auth.currentUser;
    let didLike = false;

    const updatedCards = cards.map((card) => {
      if (card.createdAt === createdAt && !card.likedBy.includes(user.uid)) {
        didLike = true;
        return {
          ...card,
          likes: card.likes + 1,
          likedBy: [user.uid, ...card.likedBy],
        };
      }
      return card;
    });

    if (didLike) {
      setCards(updatedCards);

      const ref = doc(db, buildingName, String(createdAt));
      await updateDoc(ref, {
        likes: (cards.find(c => c.createdAt === createdAt)?.likes || 0) + 1,
        likedBy: [user.uid, ...(cards.find(card => card.createdAt === createdAt)?.likedBy || [])],
      });
    }
  };



  return (
    <>
      <BoardContainer>
        <CloseButton onClick={onClose} aria-label="Close">
          ✕
        </CloseButton>
        <h2>{buildingName}</h2>

        <GridContainer>
          {[1, 2, 3].map((row) => (
            <GridRow key={row}>
              {cardsWithSpans
                .filter((card) => card.row === row)
                .map((card, idx) => {
                  const safeColor = ROW_COLORS[row][idx] || "#ffffff";
                  const widthPercent = ((card.span / 12) * 100).toFixed(1);

                  return (
                    <GridItem
                      key={card.id}
                      style={{
                        width: `${widthPercent}%`,
                      }}
                    >
                      <ComplainCard
                        key={card.createdAt}
                        content={card.content}
                        likes={card.likes}
                        onLike={() => handleLike(card.createdAt)}
                        color={safeColor}
                      />
                    </GridItem>
                  );
                })}
            </GridRow>
          ))}
        </GridContainer>
        <RecentLine />
        <PostItWrapper>
          {cards.map((card) => (
            <Wrapper key={card.createdAt}>
              <Card>
                <Content>{card.content}</Content>
                <ButtonWrap>
                  <StyledLikeButton onClick={() => handleLike(card.createdAt)}>
                    👍 {card.likes}
                  </StyledLikeButton>
                </ButtonWrap>
                <FoldedCorner />
              </Card>
            </Wrapper>
          ))}
        </PostItWrapper>
      </BoardContainer>

      <AddButtonContainer>
        {isAdding && (
          <div style={{ marginBottom: "12px" }}>
            <NewPostit onSubmit={handleSubmit} />
          </div>
        )}
        <AddButton onClick={() => { setIsAdding((prev) => !prev) }} isAdding={isAdding} />
      </AddButtonContainer>
    </>
  );
}

export default ComplainBoard;
