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
      primary: tier2.color.white,
    },
    background: {
      primary: tier2.color.primary,
    },
    padding: {
      default: '15px',
      large: '20px',
      small: '10px',
    },
  },
};
