import tokenVariables from './token-variables.json';

// TIER 1
export const tier1 = tokenVariables;

// TIER 2
export const tier2 = {
  color: {
    white: tier1.GlobalWhite,
    primary: tier1.GlobalPurple500,
    danger: tier1.GlobalSemanticDanger,
  },
};

// TIER 3
export const tier3 = {
  button: {
    color: {
      primary: {
        default: tier2.color.white,
        hover: tier2.color.white,
      },
    },
    background: {
      primary: {
        default: tier2.color.primary,
        hover: tier2.color.danger,
      },
    },
    fontSize: {
      default: ` 14px`,
      large: `${tier1.GlobalLarge}px`,
      small: `${tier1.GlobalSmall}px`,
      xSmall: `${tier1.GlobalXSmall}px`,
    },
    padding: {
      default: `${tier1.GlobalMiddle}px`,
      large: `${tier1.GlobalLarge}px`,
      small: `${tier1.GlobalSmall}px`,
      xSmall: `${tier1.GlobalXSmall}px`,
    },
    borderRadius: {
      default: `${tier1.GlobalRadiusSmall}px`,
      large: `${tier1.GlobalRadiusSmall}px`,
      small: `${tier1.GlobalRadiusSmall}px`,
      xSmall: `${tier1.GlobalRadiusSmall}px`,
    },
  },
};
