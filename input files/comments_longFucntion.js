// Function to calculate and summarize order details
function calculateOrderSummary(orders) {
    // Initialize summary object
    let summary = {
      totalOrders: 0,
      totalPrice: 0,
      averagePricePerOrder: 0
    };
  
    // Sum up orders and prices
    orders.forEach(order => {
      summary.totalOrders += 1;                    // Increment total orders count
      summary.totalPrice += order.price;           // Add current order price to total
    });
  
    // Calculate average price per order
    if (summary.totalOrders > 0) {
      summary.averagePricePerOrder = summary.totalPrice / summary.totalOrders;
    }
  
    // Return the summary object
    return summary;
  }
  