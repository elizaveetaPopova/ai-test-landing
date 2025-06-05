import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      surface1: string;
      default: string;
      muted: string;
      surface5: string;
      surface3: string;
      disabled: string;
      disabledBtn: string;

      blue100: string;
      blue110: string;
      blue060: string;
      blue050: string;

      red110: string;
      red050: string;

      violet110: string;

      text: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
  }
}
