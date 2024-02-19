export const filterAndSortData = (
    data,
    name, status, poNo, soNO, ascending =true
  ) => {
    // console.log(parseInt(soNO))
    let filteredData = data.filter((item) => {
      const nameMatch =
        name &&
        item.commodity_name.toLowerCase().includes(name.toLowerCase());
      const statusMatch =
        status &&
        item.purchase_order_status.toLowerCase() === status.toLowerCase();
      const poMatch = !poNo || (poNo && parseInt(item.purchase_order_number) === parseInt(poNo));
      const soMatch = !soNO || (soNO && parseInt(item.sales_order) === parseInt(soNO));
    
      return nameMatch && statusMatch && poMatch && soMatch;
    });
    
  
    if (ascending) {
      filteredData.sort((a, b) =>
        a.purchase_date.localeCompare(b.purchase_date)
      );
    } else {
      filteredData.sort((a, b) =>
        b.purchase_date.localeCompare(a.purchase_date)
      );
    }
  
    return filteredData;
  };
  