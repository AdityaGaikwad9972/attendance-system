import { QRCodeCanvas } from "qrcode.react";

export default function AdminDashboard() {

  const qrData = JSON.stringify({
    studentId: "6a08bf4c8c8b302ef16b3c8e"
  });

  return (

    <div style={{ padding: "40px" }}>

      <h1>Admin Dashboard</h1>

      <h2>Attendance QR</h2>

      <QRCodeCanvas
        value={qrData}
        size={300}
      />

    </div>

  );

}