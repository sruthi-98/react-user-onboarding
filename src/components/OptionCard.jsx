import React from "react";

const OptionCard = ({ handleClick, heading, desc, Icon, selected }) => {
  return (
    <article
      className={`option-card ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <Icon className="option-card__icon" />
      <p className="option-card__heading">{heading}</p>
      <p className="option-card__desc">{desc}</p>
    </article>
  );
};

export default OptionCard;
