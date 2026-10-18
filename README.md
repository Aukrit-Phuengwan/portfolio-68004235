# Portfolio — Au-krit Phuengwan

เว็บไซต์ Portfolio สองภาษาของ **อุกฤษฏ์ พึ่งหวาน** (Au-krit Phuengwan), รหัสนักศึกษา **68004235** นักศึกษา ICT มหาวิทยาลัยศรีปทุม สำหรับวิชา **ICT24167 การบริหารเครือข่ายคอมพิวเตอร์**

## เว็บไซต์

เว็บไซต์ HTML/CSS/JavaScript แบบ static พร้อมฟอนต์และรูปภาพใน repository ไม่ต้องติดตั้ง dependencies หรือ build

- เมนู: Home, About, Projects, Skills, Experience และ Contact
- ปุ่มสลับภาษาไทย / English
- หน้าผลงานแสดงโครงงาน ปวช. ปี 3: มีความสุข — เว็บไซต์ร้านชานม พร้อมภาพหน้าเว็บและฐานข้อมูล
- หน้าประสบการณ์มีปุ่มดาวน์โหลด ZIP โครงงานต้นฉบับสำหรับอาจารย์
- บันทึกการใช้ Google Antigravity อยู่ที่ `antigravity.html`

## แก้ไขเนื้อหา

- `content.js`: ข้อมูลและข้อความภาษาไทย / อังกฤษ
- `index.html`: โครงสร้างหน้าเว็บ
- `styles.css`: สี ฟอนต์ และรูปแบบ responsive
- `app.js`: การเปลี่ยนหน้า สลับภาษา และดาวน์โหลด
- `assets/`: รูปภาพและฟอนต์

## ไฟล์โครงงาน

ไฟล์ ZIP ถูกแบ่งเก็บไว้ใน `downloads/mee-khwam-sook/` ปุ่มดาวน์โหลดจะอ่าน manifest ตรวจ SHA-256 ของแต่ละส่วน แล้วรวมเป็น ZIP เดียว ไม่ต้องรวมไฟล์เอง

ZIP มีโค้ด รูปภาพ โครงสร้างฐานข้อมูล และคู่มือสำหรับอาจารย์ ไม่รวม `.env` จริง, private keys, runtime logs หรือข้อมูลแถวจาก SQL dump

เว็บไซต์ Portfolio เป็น static เท่านั้น ไม่ได้เปิดรัน backend Laravel หรือฐานข้อมูลของโครงงานบน GitHub Pages

## เครื่องมือพัฒนา

เคยใช้ Google Antigravity ตรวจและปรับปรุงโค้ดบางส่วน มี Codex ช่วยพัฒนาและปรับปรุงเพิ่มเติม รายงานที่ `downloads/antigravity-review.md` ระบุขอบเขตการตรวจในเวอร์ชันก่อนหน้า

## ฟอนต์

Sarabun และฟอนต์ที่แนบมาใช้ SIL Open Font License ดูไฟล์ license ใน `assets/`
