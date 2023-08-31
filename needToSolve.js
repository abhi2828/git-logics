// filter all objects with undefine values in it

let data = {
    CycleMode: 0,
    FirstEntryBuyQuantity: "44",
    BuyingNoOfLevel: "5",
    TakeprofitPercent: "1.2",
    SellProfitPriceBounceBackFromPeak: "2.24",
    BuyPiceFromLowBounceBack: "2.2",
    SubPositionTakeProfitCallBack: "2.2",
    Dips: [
        {
            Level: "1",
            Times: "222",
            Percentage: "2.2"
        },
        {
            Level: "2",
            Times: "222",
            Percentage: "2.2"
        },
        {
            Level: "3",
            Times: "111",
            Percentage: "2.2"
        },
        {
            Level: "4",
            Times: "522",
            Percentage: "2.2"
        },
        {
            Level: "5",
            Times: "5",
            Percentage: "2.2"
        },
        { Level: "6", Times: undefined, Percentage: undefined },
        { Level: "7", Times: undefined, Percentage: undefined }
    ],
    SubDips: [
        {
            Level: "5",
            Percent: "2.2"
        },
        { Level: "6", Percentage: undefined },
        { Level: "7", Percentage: undefined }
    ]
};

const output = {
    // CycleMode: active ? 0 : 1,
    FirstEntryBuyQuantity: data.FirstEntryBuyQuantity,
    BuyingNoOfLevel: data.BuyingNoOfLevel,
    TakeprofitPercent: data.TakeprofitPercent,
    SellProfitPriceBounceBackFromPeak: data.SellProfitPriceBounceBackFromPeak,
    BuyPiceFromLowBounceBack: data.BuyPiceFromLowBounceBack,
    SubPositionTakeProfitCallBack: data.SubPositionTakeProfitCallBack,
    Dips: [],
    SubDips: []
  };
  
  for (const key in data) {
    if (key.startsWith("Times")) {
      const i = key.substring(5);
      output.Dips.push({
        Level: i,
        Times: data[`Times${i}`],
        Percentage: data[`Percentage${i}`]
      });
  
    i > 4 && output.SubDips.push({
      Level: i,
      Percent: data[`Percent${i}`]
      });
    }
  } 
  
  console.log('output', output)

  const filteredData = {
    ...output,
    Dips: output.Dips.filter(item => 
      item.Level !== undefined &&
      item.Times !== undefined &&
      item.Percentage !== undefined
    ),
    SubDips: output.SubDips.filter(item => 
      item.Level !== undefined &&
      item.Percentage !== undefined
    )
  };
  
  console.log('filteredData',filteredData);


