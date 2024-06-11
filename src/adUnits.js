export const adUnitsF = (elementId, div_1_sizes, div_2_sizes) => {
  return [
    {
      code: elementId,
      mediaTypes: {
        banner: {
          sizes: div_1_sizes,
        },
      },
      bids: [
        {
          bidder: "adtelligent",
          params: {
            aid: 350975,
          },
        },
      ],
    },
    {
      code: elementId,
      mediaTypes: {
        banner: {
          sizes: div_2_sizes,
        },
      },
      bids: [
        {
          bidder: "adtelligent",
          params: {
            aid: 350975,
          },
        },
      ],
    },
  ];
};
