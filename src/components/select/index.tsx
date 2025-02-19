import * as React from "react";
import { SelectChangeEvent, SelectProps } from "@mui/material";
import { Item, Label, StyledDropDown, Wrapper } from "./styles";

interface DropdownItems {
  value: string;
  label: string;
}

// Use a type alias with an intersection type to define the props
export type BaseSelectProps<T> = {
  className?: string;
  label?: string;
  items: DropdownItems[];
  onChange?: (event: SelectChangeEvent<any>) => void;
  initialvalue?: keyof T;
} & SelectProps;

const BaseSelect = <T extends object>(props: BaseSelectProps<T>) => {
  const { items, onChange, label, initialvalue, ...rest } = props;
  const [value, setValue] = React.useState<keyof T | string>(
    initialvalue || ""
  );

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <Wrapper>
      {label ? <Label>{label}</Label> : <></>}
      <StyledDropDown
        {...rest}
        label=""
        value={value}
        onChange={handleChange}
        displayEmpty
        variant="outlined"
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: undefined, // overridden by our styled Paper if needed
            },
          },
        }}
      >
        {items.map((item) => (
          <Item key={item.value} value={item.value}>
            {item.label}
          </Item>
        ))}
      </StyledDropDown>
    </Wrapper>
  );
};

export default BaseSelect;
