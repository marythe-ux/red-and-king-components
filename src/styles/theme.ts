import tokenVariables from './token-variables.json';

// TIER 1
export const tier1 = tokenVariables;

// TIER 2
export const tier2 = {
  color: {
    white: tier1.GlobalWhite,
    primary: tier1.GlobalPrimary500,
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
      default: `14px`,
      large: `24px`,
      small: `14px`,
    },
    padding: {
      default: `${tier1.GlobalM}px ${tier1.GlobalBase}px`,
      large: `${tier1.GlobalBase}px ${tier1.GlobalL}px`,
      small: `${tier1.GlobalS}px`,
    },
    borderRadius: {
      default: `${tier1.GlobalRadiusSmall}px`,
      large: `${tier1.GlobalRadiusSmall}px`,
      small: `${tier1.GlobalRadiusSmall}px`,
    },
  },
};
