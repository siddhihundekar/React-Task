import React from 'react'
function App() {

  const studentsDetail = {
    name: "Rahul",
    age: 21
  }

  const productDetail = {
    productName: "Wire less Mouse",
    quantity: 3,
    price: 499
  }
  const studentAttendance = {
    name: "Anjali",
    isPresent: true
  }
  const fullName = {
    firstName: "Amit",
    lastName: "sharma"
  }

  const fulName = fullName.firstName + " " + fullName.lastName

  const loanEMIDisplay = {
    loanAmount: 500000,
    interestRate: 8,
    tenureYears: 5
  }
  const P = loanEMIDisplay.loanAmount
  const R = loanEMIDisplay.interestRate / (12 * 100)
  const N = loanEMIDisplay.tenureYears * 12
  const EMI = [P * R * (1 + R) ** N] / [(1 + R) ** N - 1]

  const favSubject = {
    name: "priya",
    subjects: ["maths", "science", "english"]
  }

  const empSalaryBreakDown = {
    emplyeeName: "Suresh",
    basic: 25000,
    hra: 10000,
  }

  const totalSalary = empSalaryBreakDown.basic + empSalaryBreakDown.hra;

  const productDiscount = {
    item: "SmartPhone",
    price: 20000,
    discount: 10
  }
  const finalPrice = productDiscount.price - (productDiscount.price * productDiscount.discount / 100)
  const orderData = {
    orderId: "ORD1234",
    customerName: "Meena",
    items: 4,
    itemPrice: 3200,
  }
  const totalPrice = orderData.itemPrice * orderData.items


  const weatherData = {
    city: "Mumbai",
    tempratureC: 30
  }
  const fahrenheit = (weatherData.tempratureC * 9 / 5) + 32
  return (
    <>
      <div>
        <h1>Hello, Welcome dear student {studentsDetail.name} your age is {studentsDetail.age}
        </h1>
        <hr />
      </div>
      <div>
        <h1>Product Name is {productDetail.productName} and quantity is {productDetail.quantity} and price per unit is {productDetail.price}</h1>
        <h1>Total Cost =  {productDetail.quantity * productDetail.price}</h1>
        <hr />
      </div >
      <div>
        <h1>
          Student Name : {studentAttendance.name} <br />isPresent : {studentAttendance.isPresent ? "Present" : "Absent"}
        </h1>
        <hr />
      </div>
      <div>
        <h1>
          Full Name  : {fulName}
        </h1>
        <hr />
      </div>
      <div>
        <h1>
          Loan Amount : {loanEMIDisplay.loanAmount} <br />
          Interest Rate : {loanEMIDisplay.interestRate} <br />
          Tenure in Years : {loanEMIDisplay.tenureYears} <br />
          Loan EMI is : {EMI.toFixed(2)}
        </h1>
        <hr />
      </div>
      <div><h1>
        Favourite subject list
        <ul>
          {favSubject.subjects.map((sub) => <li >{sub}</li>)}
        </ul>
      </h1>
        <hr />
      </div>
      <div>
        <h1>
          Employee Name : {empSalaryBreakDown.emplyeeName} <br />
          Basic Salary : {empSalaryBreakDown.basic} <br />
          HRA : {empSalaryBreakDown.hra} <br />
          Total Salary : {totalSalary}
        </h1>
        <hr />
      </div>
      <div>
        <h1>
          Product : {productDiscount.item} <br />
          Price : {productDiscount.price} <br />
          Discount : {productDiscount.discount}% <br />
          Final Price : {finalPrice}
        </h1>
        <hr />
      </div>
      <div>
        <h1>
          Order ID : {orderData.orderId} <br />
          Customer Name : {orderData.customerName} <br />
          Items : {orderData.items} <br />
          Total Price : {totalPrice} <br />
        </h1>
        <hr />
      </div>
      <div>
        <h1>
          The Tempratue in {weatherData.city} is {weatherData.tempratureC}°C or {fahrenheit}°F
        </h1>
        <hr />
      </div>
    </>
  )
}

export default App
