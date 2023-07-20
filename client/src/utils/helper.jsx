import icons from './icons.util';

export const formatMoney = (number) =>
  Number(+number.toFixed(1)).toLocaleString();

export const renderStarFromNumber = (number, size) => {
  const { BsStarFill, BsStar } = icons;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < +number)
      stars.push(<BsStarFill color="orange" key={i} size={size || 16} />);
    else stars.push(<BsStar color="orange" key={i} size={size || 16} />);
  }

  return stars;
};
