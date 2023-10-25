import { ButtonList, ButtonItem, Button } from './FeedbackButtons.styled';

export const FeedbackButtons = ({ options, handleClick }) => {
  const optionsKey = Object.keys(options);

  return (
    <>
      <ButtonList>
        {optionsKey.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <ButtonItem key={index}>
              <Button type="button" name={option} onClick={() => handleClick(option)}>
                {label}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};