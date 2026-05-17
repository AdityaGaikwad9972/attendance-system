import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import axios from "axios";

export default function ScanQR() {

  const handleScan = async (result) => {

    if (result && result[0]) {

      try {

        console.log(result);

        const qrData = JSON.parse(result[0].rawValue);

        await axios.post(
          "http://localhost:5000/api/attendance/mark",
          {
            studentId: qrData.studentId
          }
        );

        alert("Attendance Marked Successfully");

      } catch (err) {

        console.log(err);

      }

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>QR Scanner</h1>

      <div style={{ width: "400px" }}>

        <Scanner
          onScan={handleScan}
          onError={(error) => console.log(error)}
        />

      </div>

    </div>

  );

}