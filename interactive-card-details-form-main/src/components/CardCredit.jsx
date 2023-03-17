import React from 'react'

function CardCredit() {
  return (
    <aside className="cardDeco">
      <div className="cardFront">
        <span>{FormData.name || "Abhilash Kumar"}</span>
        <span>{FormData.mm ?? "00"}/{FormData.yy ?? "00"}</span>
      </div>
      <div className="cardBack"><span>{FormData.cvc ?? "000"}</span></div>
    </aside>
  )
}

export default CardCredit;