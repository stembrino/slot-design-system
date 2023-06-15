import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SlotButton from "..";
import { SlotButtonProps } from "../SlotButton.types";

describe("TestComponent", () => {
  const renderComponent = ({ label = "test" }: Partial<SlotButtonProps>) => {
    const onClickMock = jest.fn();
    const { container } = render(<SlotButton label={label} onClick={onClickMock} />);

    return {
      container,
      onClickMock,
    };
  };

  it("should snapshot match", () => {
    const { container } = renderComponent({});

    expect(container).toMatchSnapshot();
  });

  it("should render heading text correctly", () => {
    renderComponent({});

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should onClick be called when click", () => {
    const { onClickMock } = renderComponent({});
    const button = screen.getByLabelText("Button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
