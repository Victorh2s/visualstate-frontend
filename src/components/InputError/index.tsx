import * as Styled from './styles';

export type InputErrorProps = {
  children?: React.ReactNode | string;
};

export const InputError = ({ children }: InputErrorProps) => {
  return <Styled.ErrorMessage>{children}</Styled.ErrorMessage>;
};
