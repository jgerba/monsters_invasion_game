import cn from "classnames";
import style from "./style.module.scss";

type TProps = {
  name: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  transparent?: boolean;
  dangerous?: boolean;
  red?: boolean;
  yellow?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const FlatButton = ({
  name,
  type = "button",
  disabled,
  transparent,
  dangerous,
  onClick,
}: TProps) => {
  return (
    <button
      className={cn(style.button, {
        [style.transparent]: transparent,
        [style.dangerous]: dangerous,
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const RoundButton = ({
  name,
  type = "button",
  disabled,
  red,
  yellow,
  onClick,
}: TProps) => {
  return (
    <div
      className={style["button-el"]}
      aria-label={`${name} button`}
      title={name}
    >
      <button
        className={cn(style["button-el__btn"], {
          [style["button-el__btn--red"]]: red,
          [style["button-el__btn--yellow"]]: yellow,
        })}
        type={type}
        disabled={disabled}
        onClick={onClick}
      ></button>

      <div className={style["button-el__back"]}></div>
      <div className={style["button-el__back2"]}></div>
    </div>
  );
};

const Button = {
  Flat: FlatButton,
  Round: RoundButton,
};

export default Button;