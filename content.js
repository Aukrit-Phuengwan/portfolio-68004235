// Portfolio content — edit this file to update the website.
window.PORTFOLIO = {
  "isSample": false,
  "name": {
    "th": "อุกฤษฏ์ พึ่งหวาน",
    "en": "Au-krit Phuengwan"
  },
  "role": {
    "th": "นักศึกษา ICT · มหาวิทยาลัยศรีปทุม",
    "en": "ICT Student · Sripatum University"
  },
  "intro": {
    "th": "ผมเป็นนักศึกษา ICT มหาวิทยาลัยศรีปทุม เคยฝึกทำเว็บไซต์และงานฐานข้อมูลจากการเรียนระดับ ปวช. มีประสบการณ์เพียงเล็กน้อย และกำลังพัฒนาทักษะผ่านการเรียนกับการลงมือทำ",
    "en": "I’m an ICT student at Sripatum University with a little experience in websites and databases from vocational coursework. I’m still a beginner, building my skills through study and hands-on practice."
  },
  "aboutLead": {
    "th": "สวัสดีครับ ผมอุกฤษฏ์ พึ่งหวาน นักศึกษา ICT มหาวิทยาลัยศรีปทุม รหัสนักศึกษา 68004235",
    "en": "Hi, I’m Au-krit Phuengwan, an ICT student at Sripatum University. My student ID is 68004235."
  },
  "aboutBody": {
    "th": "ก่อนเข้าศึกษาที่มหาวิทยาลัยศรีปทุม ผมศึกษาระดับประกาศนียบัตรวิชาชีพ (ปวช.) ปีที่ 1–3 ที่วิทยาลัยเทคโนโลยีพงษ์สวัสดิ์ (PSC) ได้เริ่มฝึกเขียนเว็บไซต์และทำงานกับฐานข้อมูล ปัจจุบันยังมีประสบการณ์เพียงเล็กน้อย และกำลังพัฒนาทักษะด้าน ICT ต่อจากพื้นฐานที่เคยเรียนมา",
    "en": "Before studying at Sripatum University, I attended vocational Years 1–3 at Pongsawadi Technological College (PSC), where I began practising website creation and database work. My experience is still limited, and I am continuing to build my ICT skills."
  },
  "email": "synergy163303@gmail.com",
  "location": {
    "th": "ICT · มหาวิทยาลัยศรีปทุม",
    "en": "ICT · Sripatum University"
  },
  "socials": [],
  "resumeUrl": null,
  "projects": [
    {
      "id": "mee-khwam-sook",
      "category": "web",
      "number": "01",
      "year": {
        "th": "ปวช. ปี 3",
        "en": "Vocational Year 3"
      },
      "name": "มีความสุข · เว็บไซต์ร้านชานม",
      "nameEn": "Mee Khwam Sook · Milk Tea Website",
      "image": "assets/mee-khwam-sook-home.jpg",
      "alt": {
        "th": "หน้าแรกเว็บไซต์ร้านชานมมีความสุข แสดงภาพร้าน เมนูนำทาง และปุ่มสั่งเครื่องดื่ม",
        "en": "Mee Khwam Sook homepage with shop imagery, navigation, and an order button"
      },
      "type": "WEB APPLICATION",
      "isPlaceholder": false,
      "description": {
        "th": "โครงงานช่วง ปวช. ปี 3 เว็บไซต์ร้านชานมมีความสุข ซิโนพาร์ค รวมข้อมูลร้าน เมนูเครื่องดื่ม โปรโมชั่น ตะกร้าสินค้า และส่วนจัดการข้อมูลหลังบ้าน",
        "en": "A vocational Year 3 project for Mee Khwam Sook Sino Park, bringing together shop information, drinks, promotions, a shopping cart, and an administration area."
      },
      "role": {
        "th": "จัดทำโครงงานเว็บไซต์ในช่วง ปวช. ปี 3",
        "en": "Website project developed during vocational Year 3"
      },
      "result": {
        "th": "ได้โค้ดต้นแบบเว็บร้านเครื่องดื่มที่เชื่อมหน้าร้าน ตะกร้า และการบันทึกคำสั่งซื้อเข้ากับฐานข้อมูล",
        "en": "Built a beverage website prototype with a storefront, shopping cart, and database-backed order recording."
      },
      "challenge": {
        "th": "รวบรวมข้อมูลร้านและเมนูเครื่องดื่มให้อยู่ในเว็บไซต์เดียว พร้อมวางขั้นตอนเลือกสินค้า ดูตะกร้า และส่งคำสั่งซื้อ รวมถึงส่วนจัดการข้อมูลสำหรับผู้ดูแล",
        "en": "Bring shop information and drinks into one website, with a flow for selecting products, reviewing a cart, submitting orders, and managing content."
      },
      "approach": {
        "th": "ใช้ Laravel 10 และ Blade แยกหน้าร้านกับส่วนหลังบ้าน จัดรูปแบบด้วย Bootstrap ใช้ JavaScript และ localStorage เก็บตะกร้าบนเบราว์เซอร์ แล้วส่งข้อมูลคำสั่งซื้อไปยัง Laravel เพื่อบันทึกลงฐานข้อมูล MariaDB",
        "en": "Used Laravel 10 and Blade for storefront and administration views, Bootstrap for layout, JavaScript and localStorage for the cart, and Laravel endpoints to record orders in MariaDB."
      },
      "tools": [
        "Laravel 10",
        "PHP",
        "Blade",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "MariaDB"
      ],
      "features": [
        {
          "th": "หน้าร้าน: หน้าแรก เมนูเครื่องดื่ม เกี่ยวกับร้าน แกลเลอรี โปรโมชั่น และติดต่อ",
          "en": "Storefront: home, drinks menu, about, gallery, promotions, and contact."
        },
        {
          "th": "การสั่งซื้อ: เลือกเครื่องดื่ม เก็บตะกร้าด้วย localStorage สรุปราคา และส่งคำสั่งซื้อ",
          "en": "Ordering: drink selection, a localStorage cart, a price summary, and order submission."
        },
        {
          "th": "หลังบ้าน: Dashboard และหน้าจัดการหมวดหมู่ สินค้า ผู้ใช้ และรายการข้อมูล",
          "en": "Administration: dashboard and screens for categories, products, users, and records."
        },
        {
          "th": "ข้อมูล: Laravel Models และโครงสร้างฐานข้อมูลสำหรับสินค้า หมวดหมู่ และคำสั่งซื้อ",
          "en": "Data: Laravel models and database structures for products, categories, and orders."
        }
      ],
      "imageCaption": {
        "th": "ภาพหน้าแรกที่แสดงจากเทมเพลตต้นฉบับของโปรเจกต์",
        "en": "Homepage rendered from the original project templates"
      },
      "previewNote": {
        "th": "ภาพประกอบเป็นการแสดงผลหน้าบ้านจากไฟล์ต้นฉบับ ยังไม่มีลิงก์ระบบออนไลน์ และยังไม่ได้ทดสอบการทำงานร่วมกับฐานข้อมูลในครั้งนี้",
        "en": "The image shows the original frontend templates. An online application link is not available, and database integration has not been tested in this update."
      },
      "liveUrl": null,
      "detailUrl": null,
      "caseStudy": [
        {
          "id": "overview",
          "title": {
            "th": "แนวคิดและภาพรวมของโครงงาน",
            "en": "Project idea & overview"
          },
          "layout": "prose",
          "items": [],
          "intro": [
            {
              "th": "มีความสุขเป็นโครงงานเว็บไซต์ร้านชานมที่จัดทำในช่วง ปวช. ปี 3 โดยใช้ร้านมีความสุข ซิโนพาร์คเป็นบริบทของงาน ตัวเว็บไซต์รวมการแนะนำร้าน ภาพบรรยากาศ เมนูเครื่องดื่ม และโปรโมชั่นไว้ด้วยกัน พร้อมส่วนเลือกสินค้า ตะกร้า และการส่งคำสั่งซื้อ",
              "en": "Mee Khwam Sook is a website project created during vocational Year 3, using the Sino Park milk tea shop as its context. It combines shop information, atmosphere, drinks, and promotions with product selection, a cart, and order submission."
            },
            {
              "th": "ขอบเขตของงานครอบคลุมทั้งส่วนที่ลูกค้ามองเห็นและส่วนจัดการข้อมูล เป็นการฝึกเชื่อมหน้าจอที่ออกแบบด้วย HTML/CSS เข้ากับ JavaScript, Laravel และฐานข้อมูล เพื่อให้เห็นการทำงานของเว็บแอปพลิเคชันตั้งแต่การเลือกสินค้าไปจนถึงการเก็บข้อมูลคำสั่งซื้อ",
              "en": "The scope covers customer-facing pages and administration screens. It brings HTML/CSS layouts together with JavaScript, Laravel, and a database, tracing the application flow from selecting a drink to recording an order."
            }
          ]
        },
        {
          "id": "users",
          "title": {
            "th": "เป้าหมายและกลุ่มผู้ใช้งาน",
            "en": "Goals & intended users"
          },
          "layout": "cards",
          "items": [
            {
              "title": {
                "th": "ลูกค้าที่สนใจร้าน",
                "en": "Customers exploring the shop"
              },
              "body": {
                "th": "ดูข้อมูลร้าน สำรวจภาพบรรยากาศ เลือกดูเมนูพร้อมภาพและราคา อ่านรายละเอียดเครื่องดื่ม แล้วเพิ่มรายการที่สนใจลงในตะกร้าได้จากหน้าเว็บไซต์",
                "en": "Explore the shop, browse its atmosphere and drink images, compare prices, read descriptions, and add selected drinks to a cart."
              }
            },
            {
              "title": {
                "th": "ผู้ดูแลข้อมูลร้าน",
                "en": "Shop content administrators"
              },
              "body": {
                "th": "ใช้หน้าจอหลังบ้านเพื่อดูภาพรวม จัดการหมวดหมู่และสินค้า พร้อมเปิดดูข้อมูลคำสั่งซื้อที่ส่งเข้ามา โดยแยกหน้าจอจัดการออกจากหน้าร้าน",
                "en": "Use separate administration screens to view an overview, manage categories and products, and review submitted order records."
              }
            }
          ],
          "intro": [
            {
              "th": "เป้าหมายของต้นแบบคือจัดข้อมูลร้านให้อ่านง่าย และวางลำดับการสั่งเครื่องดื่มที่ต่อเนื่อง พร้อมฝึกจัดการข้อมูลที่เกิดจากการใช้งานเว็บไซต์",
              "en": "The prototype aims to make shop information easy to browse, establish a clear ordering sequence, and practise managing the data produced by website interactions."
            }
          ]
        },
        {
          "id": "features",
          "title": {
            "th": "ฟังก์ชันหลักของเว็บไซต์",
            "en": "Main website features"
          },
          "layout": "cards",
          "items": [
            {
              "title": {
                "th": "หน้าร้านและภาพลักษณ์",
                "en": "Storefront & presentation"
              },
              "body": {
                "th": "หน้าแรกใช้ภาพสไลด์แสดงบรรยากาศร้าน มีปุ่มเข้าสู่การสั่งเครื่องดื่ม ส่วนแนะนำร้าน และเมนูแนะนำ พร้อมเมนูนำทางไปยังหน้าเกี่ยวกับ แกลเลอรี โปรโมชั่น และติดต่อ",
                "en": "The homepage uses a shop-image slideshow, an ordering call to action, an introduction, and recommended drinks. Navigation leads to about, gallery, promotions, and contact pages."
              }
            },
            {
              "title": {
                "th": "เมนูและรายละเอียดเครื่องดื่ม",
                "en": "Drinks & product details"
              },
              "body": {
                "th": "แสดงเครื่องดื่มเป็นการ์ดพร้อมรูป หมวดหมู่ ชื่อ และราคา เมื่อเลือกสินค้า ระบบเก็บรายการที่เลือกไว้ในเบราว์เซอร์เพื่อแสดงรายละเอียดและปุ่มเพิ่มลงตะกร้าในหน้าถัดไป",
                "en": "Drink cards show images, categories, names, and prices. Selecting a product saves it in the browser so the next page can show its description and an add-to-cart action."
              }
            },
            {
              "title": {
                "th": "ตะกร้าและสรุปรายการ",
                "en": "Cart & order summary"
              },
              "body": {
                "th": "เก็บตะกร้าด้วย localStorage แสดงรายการที่เลือก ลบสินค้าออกได้ และคำนวณยอดรวม ค่าส่ง ส่วนลด และยอดสุทธิ ก่อนส่งข้อมูลคำสั่งซื้อไปยังเซิร์ฟเวอร์",
                "en": "A localStorage cart displays selected items, supports removal, and calculates the subtotal, delivery fee, discount, and final total before submitting the order."
              }
            },
            {
              "title": {
                "th": "จัดการหมวดหมู่และสินค้า",
                "en": "Category & product management"
              },
              "body": {
                "th": "หลังบ้านมีการเพิ่ม แก้ไข และลบหมวดหมู่กับสินค้า กรอกชื่อ ราคา จำนวน และคำอธิบาย พร้อมอัปโหลดรูปสินค้าและสร้างภาพขนาดย่อ",
                "en": "Administration screens support creating, editing, and deleting categories and products, including names, prices, quantities, descriptions, image uploads, and thumbnails."
              }
            },
            {
              "title": {
                "th": "ตรวจสอบข้อมูลก่อนบันทึก",
                "en": "Form validation & feedback"
              },
              "body": {
                "th": "ฟอร์มเพิ่มสินค้าตรวจข้อมูลจำเป็น จำนวนที่เป็นตัวเลข และชนิดไฟล์รูปภาพ ส่วนหมวดหมู่มีการตรวจชื่อซ้ำ และป้องกันการลบหมวดหมู่ที่ยังมีสินค้าอ้างอิงอยู่",
                "en": "Product forms check required fields, numeric quantities, and image file types. Category creation checks duplicate names, and deletion is blocked when products still refer to a category."
              }
            },
            {
              "title": {
                "th": "ดูคำสั่งซื้อและข้อมูลหลังบ้าน",
                "en": "Order records & administration"
              },
              "body": {
                "th": "หน้ารายการคำสั่งซื้อดึงข้อมูลล่าสุดจากฐานข้อมูล แปลงรายการสินค้าเพื่อแสดงผล และแบ่งหน้า นอกจากนี้ในโปรเจกต์ยังมีหน้าจัดการผู้ใช้ โปรโมชั่น แกลเลอรี และข้อมูลติดต่อ",
                "en": "The order list loads recent database records, prepares stored item data for display, and paginates results. The project also includes user, promotion, gallery, and contact administration screens."
              }
            }
          ]
        },
        {
          "id": "journey",
          "title": {
            "th": "ลำดับการสั่งเครื่องดื่ม",
            "en": "The ordering journey"
          },
          "layout": "steps",
          "items": [
            {
              "title": {
                "th": "เข้าสู่หน้าร้าน",
                "en": "Visit the storefront"
              },
              "body": {
                "th": "ดูข้อมูลร้านและกดปุ่ม “สั่งเครื่องดื่ม” เพื่อเข้าสู่รายการสินค้า",
                "en": "Browse the shop introduction and use the order button to open the product list."
              }
            },
            {
              "title": {
                "th": "เลือกและอ่านรายละเอียด",
                "en": "Choose a drink"
              },
              "body": {
                "th": "เลือกการ์ดเครื่องดื่มเพื่อดูภาพ คำอธิบาย และราคา โดยข้อมูลรายการที่เลือกถูกเก็บใน selectedProduct",
                "en": "Open a drink card to view its image, description, and price. The selected item is kept in selectedProduct."
              }
            },
            {
              "title": {
                "th": "เพิ่มลงตะกร้า",
                "en": "Add to the cart"
              },
              "body": {
                "th": "เพิ่มเครื่องดื่มที่เลือกลงใน cart ของ localStorage เพื่อใช้แสดงรายการในหน้าตะกร้า",
                "en": "Add the selected drink to the localStorage cart for display on the cart page."
              }
            },
            {
              "title": {
                "th": "ตรวจรายการและยอดรวม",
                "en": "Review items & totals"
              },
              "body": {
                "th": "ตรวจสอบรายการ ลบสินค้าที่ไม่ต้องการ และดูยอดสุทธิก่อนกดยืนยันคำสั่งซื้อ",
                "en": "Review selected items, remove unwanted drinks, and check the final total before submitting."
              }
            },
            {
              "title": {
                "th": "ส่งและบันทึกคำสั่งซื้อ",
                "en": "Submit & record the order"
              },
              "body": {
                "th": "หน้าเว็บส่งข้อมูลเป็น JSON ผ่าน POST ไปยัง Laravel ซึ่งมีโค้ดบันทึกยอดรวม ยอดสุทธิ และรายการสินค้า เมื่อได้รับผลตอบกลับ หน้าเว็บจะแจ้งข้อความและล้างตะกร้า",
                "en": "The browser sends JSON in a POST request to Laravel, whose handler records totals and item data. After a response, the frontend displays a message and clears the cart."
              }
            }
          ]
        },
        {
          "id": "technology",
          "title": {
            "th": "เทคโนโลยีและหน้าที่ในโปรเจกต์",
            "en": "Technology & its role"
          },
          "layout": "stack",
          "items": [
            {
              "title": {
                "th": "Laravel 10 · PHP",
                "en": "Laravel 10 · PHP"
              },
              "body": {
                "th": "กำหนดเส้นทางหน้าเว็บ แยก Controller สำหรับหน้าร้านและหลังบ้าน รับข้อมูลฟอร์ม และเรียก Model เพื่อจัดการข้อมูล",
                "en": "Defines routes, separates storefront and administration controllers, handles form submissions, and uses models to work with data."
              }
            },
            {
              "title": {
                "th": "Blade · HTML · CSS",
                "en": "Blade · HTML · CSS"
              },
              "body": {
                "th": "ประกอบหน้าเว็บจาก Layout และส่วนย่อย เช่น Header และ Footer เพื่อลดการเขียนหน้าตาซ้ำหลายหน้า",
                "en": "Composes pages from layouts and shared header/footer partials instead of repeating the same markup across views."
              }
            },
            {
              "title": {
                "th": "Bootstrap · Tailwind CSS",
                "en": "Bootstrap · Tailwind CSS"
              },
              "body": {
                "th": "ใช้ Bootstrap กับหน้าร้าน และมีคลาส Tailwind ในหน้าสินค้า รายละเอียด และตะกร้า เพื่อจัดกริด ระยะห่าง และรูปแบบองค์ประกอบ",
                "en": "Uses Bootstrap in the storefront and Tailwind utility classes in product, detail, and cart views for grids, spacing, and component styling."
              }
            },
            {
              "title": {
                "th": "JavaScript · localStorage · Fetch",
                "en": "JavaScript · localStorage · Fetch"
              },
              "body": {
                "th": "แสดงข้อมูลสินค้าบนหน้าเว็บ เก็บสินค้าที่เลือกและตะกร้า คำนวณราคา และส่งข้อมูลคำสั่งซื้อไปยังเซิร์ฟเวอร์",
                "en": "Renders product data, stores selections and the cart, calculates totals, and sends order data to the server."
              }
            },
            {
              "title": {
                "th": "MariaDB · Eloquent",
                "en": "MariaDB · Eloquent"
              },
              "body": {
                "th": "จัดเก็บข้อมูลสินค้า หมวดหมู่ และคำสั่งซื้อ ใช้ Eloquent ติดต่อข้อมูล และเชื่อมสินค้ากับหมวดหมู่",
                "en": "Stores products, categories, and orders. Eloquent models access the records and associate products with categories."
              }
            },
            {
              "title": {
                "th": "Intervention Image · SweetAlert",
                "en": "Intervention Image · SweetAlert"
              },
              "body": {
                "th": "โค้ดหลังบ้านใช้ Intervention Image ย่อภาพสินค้า และใช้ข้อความแจ้งผลแบบ SweetAlert หลังการจัดการข้อมูล",
                "en": "Administration code uses Intervention Image for product thumbnails and SweetAlert feedback after data operations."
              }
            }
          ]
        },
        {
          "id": "data",
          "title": {
            "th": "การจัดการข้อมูลในต้นแบบ",
            "en": "How the prototype handles data"
          },
          "layout": "prose",
          "items": [],
          "intro": [
            {
              "th": "สินค้าฝั่งหลังบ้านผูกกับหมวดหมู่ผ่าน category_id เพื่อแยกประเภทและเรียกข้อมูลที่เกี่ยวข้อง ส่วนคำสั่งซื้อเก็บยอดรวม ยอดสุทธิ และรายการสินค้าในฟิลด์ items รูปแบบ JSON โดยมีหน้าสำหรับนำข้อมูลกลับมาแสดงเป็นรายการ",
              "en": "Administration products refer to categories through category_id. Orders store a subtotal, a final total, and item data in a JSON items field, with a separate view for reading those records."
            },
            {
              "th": "ในเวอร์ชันต้นฉบับ รายการเครื่องดื่มที่แสดงบนหน้าสั่งซื้อถูกกำหนดไว้ใน JavaScript ขณะที่หลังบ้านจัดการข้อมูลสินค้าในฐานข้อมูล การเชื่อมให้หน้าร้านอ่านสินค้าจากฐานข้อมูลเดียวกันจึงเป็นแนวทางต่อยอดที่ชัดเจนของงานชิ้นนี้",
              "en": "In the original version, the ordering page defines its drink list in JavaScript, while administration manages products in the database. Connecting the storefront to that same product source is a clear next step for the project."
            }
          ],
          "gallery": [
            {
              "id": "database-diagram",
              "source": "assets/projects/mee-khwam-sook/database-diagram.png",
              "width": 2200,
              "height": 1236,
              "label": {
                "th": "DATABASE DESIGN",
                "en": "DATABASE DESIGN"
              },
              "title": {
                "th": "แผนผังความสัมพันธ์ของข้อมูล",
                "en": "Database relationship diagram"
              },
              "description": {
                "th": "ภาพออกแบบฐานข้อมูล แสดงตารางสินค้า หมวดหมู่ ลูกค้า พนักงาน การขาย และรายละเอียดการขาย พร้อมเส้นเชื่อมความสัมพันธ์ระหว่างตาราง เพื่ออธิบายการจัดกลุ่มข้อมูลในระบบ",
                "en": "Database design showing products, categories, customers, employees, sales, and sale details, with links illustrating relationships between tables."
              },
              "alt": {
                "th": "แผนผังฐานข้อมูลแสดงความสัมพันธ์ระหว่างตาราง products, category, customer, employee, sale และ sales details",
                "en": "Database diagram linking products, categories, customers, employees, sales, and sale details"
              }
            },
            {
              "id": "database-admin",
              "source": "assets/projects/mee-khwam-sook/database-admin.png",
              "width": 1920,
              "height": 1029,
              "label": {
                "th": "DATABASE MANAGEMENT",
                "en": "DATABASE MANAGEMENT"
              },
              "title": {
                "th": "โครงสร้างตารางใน phpMyAdmin",
                "en": "Table structure in phpMyAdmin"
              },
              "description": {
                "th": "ภาพหน้าจอฐานข้อมูล project ใน phpMyAdmin แสดง 8 ตาราง เช่น category, products, customer และ sale เป็นภาพรวมของโครงสร้างข้อมูลที่ใช้ประกอบการออกแบบระบบหลังบ้าน",
                "en": "The project database in phpMyAdmin, showing eight tables including category, products, customer, and sale. This gives an overview of the table structure used in the administration design."
              },
              "alt": {
                "th": "หน้าจอ phpMyAdmin แสดงรายการ 8 ตารางในฐานข้อมูล project",
                "en": "phpMyAdmin showing eight tables in the project database"
              }
            },
            {
              "id": "sql-practice",
              "source": "assets/projects/mee-khwam-sook/sql-practice.png",
              "width": 1920,
              "height": 1031,
              "label": {
                "th": "SQL PRACTICE",
                "en": "SQL PRACTICE"
              },
              "title": {
                "th": "ตัวอย่างการเรียกดูข้อมูลด้วย SQL",
                "en": "Querying data with SQL"
              },
              "description": {
                "th": "ภาพประกอบทักษะฐานข้อมูลเพิ่มเติม แสดงการใช้ MySQL Workbench เรียกดูข้อมูลด้วยคำสั่ง SELECT และตรวจผลลัพธ์ในตาราง Result Grid จากงานฝึก SQL",
                "en": "An additional example of database practice: using SELECT in MySQL Workbench and reviewing returned records in the Result Grid."
              },
              "alt": {
                "th": "MySQL Workbench แสดงคำสั่ง SELECT และผลลัพธ์ตารางข้อมูลจากงานฝึก SQL",
                "en": "MySQL Workbench showing a SELECT query and its tabular result"
              }
            }
          ]
        },
        {
          "id": "practice",
          "title": {
            "th": "ทักษะที่ได้ฝึกจากโครงงาน",
            "en": "Skills practised in this project"
          },
          "layout": "cards",
          "items": [
            {
              "title": {
                "th": "คิดเป็นลำดับการใช้งาน",
                "en": "Designing a user flow"
              },
              "body": {
                "th": "เชื่อมหน้าแรก รายการเครื่องดื่ม รายละเอียด และตะกร้าให้เป็นขั้นตอนที่สัมพันธ์กัน พร้อมส่งข้อมูลระหว่างหน้า",
                "en": "Connects the homepage, drink list, product detail, and cart into a sequence with data passed between views."
              }
            },
            {
              "title": {
                "th": "เชื่อม Frontend กับ Backend",
                "en": "Connecting frontend & backend"
              },
              "body": {
                "th": "ฝึกจัดข้อมูลบนเบราว์เซอร์ให้อยู่ในรูปแบบ JSON แล้วส่งคำขอไปยัง Laravel เพื่อจัดเก็บฝั่งเซิร์ฟเวอร์",
                "en": "Practises preparing browser-side data as JSON and submitting requests to Laravel for server-side storage."
              }
            },
            {
              "title": {
                "th": "จัดการข้อมูลและรูปภาพ",
                "en": "Working with records & images"
              },
              "body": {
                "th": "ใช้ฟอร์มสำหรับเพิ่มและแก้ไขข้อมูล ตรวจค่าที่รับเข้า เชื่อมสินค้ากับหมวดหมู่ และจัดการไฟล์ภาพพร้อมภาพย่อ",
                "en": "Uses create/edit forms, input checks, product-category associations, and uploaded images with thumbnails."
              }
            },
            {
              "title": {
                "th": "แบ่งโครงสร้างเว็บไซต์",
                "en": "Structuring a website"
              },
              "body": {
                "th": "แยก Route, Controller, Model และ View พร้อมใช้ Layout ร่วมกัน เพื่อจัดระเบียบหน้าร้านและส่วนหลังบ้าน",
                "en": "Separates routes, controllers, models, and views, using shared layouts to organise storefront and administration code."
              }
            }
          ]
        },
        {
          "id": "next",
          "title": {
            "th": "แนวทางพัฒนาต่อ",
            "en": "Possible next steps"
          },
          "layout": "list",
          "items": [
            {
              "title": {
                "th": "ใช้ข้อมูลสินค้าจากแหล่งเดียวกัน",
                "en": "Use one product data source"
              },
              "body": {
                "th": "ปรับหน้าร้านให้อ่านข้อมูลสินค้า ราคา และรูปภาพจากฐานข้อมูลเดียวกับหลังบ้าน เพื่อลดการแก้ข้อมูลซ้ำ",
                "en": "Read storefront products, prices, and images from the administration database to avoid maintaining duplicate lists."
              }
            },
            {
              "title": {
                "th": "เพิ่มตัวเลือกและสถานะคำสั่งซื้อ",
                "en": "Extend ordering options & status"
              },
              "body": {
                "th": "ต่อยอดจำนวนสินค้า ระดับความหวาน ท็อปปิง และสถานะคำสั่งซื้อ เพื่อรองรับรายละเอียดการสั่งเครื่องดื่มมากขึ้น",
                "en": "Extend the flow with quantities, sweetness levels, toppings, and order statuses."
              }
            },
            {
              "title": {
                "th": "เตรียมระบบสำหรับใช้งานจริง",
                "en": "Prepare for real-world use"
              },
              "body": {
                "th": "เพิ่มการตรวจสอบราคาและคำสั่งซื้อฝั่งเซิร์ฟเวอร์ จัดสิทธิ์การเข้าถึงหลังบ้าน และทดสอบกระบวนการร่วมกับฐานข้อมูลก่อนนำไปใช้งาน",
                "en": "Add server-side price and order checks, define administration access permissions, and test the complete database-backed flow before real use."
              }
            }
          ]
        }
      ],
      "sourceDownload": {
        "manifest": "downloads/mee-khwam-sook/manifest.json",
        "fileName": "mee-khwam-sook-project.zip",
        "bytes": 84496886
      }
    }
  ],
  "skills": [
    {
      "number": "01",
      "title": {
        "th": "การสร้างหน้าเว็บไซต์",
        "en": "HTML & web layout"
      },
      "description": {
        "th": "เคยฝึกใช้ HTML และ CSS จัดโครงสร้างหน้าเว็บ ข้อความ รูปภาพ และเมนูนำทางจากงานเรียนและโครงงานร้านชานม ยังอยู่ระหว่างฝึกจัดหน้าให้เป็นระเบียบและรองรับหลายขนาดหน้าจอ",
        "en": "Some practice using HTML and CSS for page structure, text, images, and navigation in coursework and the milk tea project. Still developing layout and responsive design skills."
      },
      "tools": [
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      "level": {
        "th": "ระดับเริ่มต้น",
        "en": "Beginner"
      },
      "project": "mee-khwam-sook",
      "link": {
        "th": "ดูโครงงานที่ได้ฝึกใช้งาน",
        "en": "View the related student project"
      }
    },
    {
      "number": "02",
      "title": {
        "th": "PHP และพื้นฐานเว็บแอปพลิเคชัน",
        "en": "PHP & web application basics"
      },
      "description": {
        "th": "มีประสบการณ์เพียงเล็กน้อยกับ PHP และโครงงานที่ใช้ Laravel เคยฝึกทำความเข้าใจฟอร์ม หน้าเว็บ และการส่งข้อมูลระหว่างหน้าร้านกับส่วนหลังบ้าน",
        "en": "Limited experience with PHP and a Laravel-based project, practising forms, views, and the flow of data between storefront and administration pages."
      },
      "tools": [
        "PHP",
        "Laravel",
        "Blade"
      ],
      "level": {
        "th": "ระดับเริ่มต้น",
        "en": "Beginner"
      },
      "project": "mee-khwam-sook",
      "link": {
        "th": "ดูโครงงานที่ได้ฝึกใช้งาน",
        "en": "View the related student project"
      }
    },
    {
      "number": "03",
      "title": {
        "th": "ฐานข้อมูลและการใช้ SQL",
        "en": "Databases & SQL"
      },
      "description": {
        "th": "เคยฝึกใช้ MySQL และ phpMyAdmin ดูโครงสร้างตาราง จัดการข้อมูล และเรียกดูข้อมูลด้วยคำสั่ง SQL เบื้องต้น พร้อมเรียนรู้ความสัมพันธ์ระหว่างตารางจากแผนผังฐานข้อมูล",
        "en": "Some practice with MySQL and phpMyAdmin: inspecting tables, managing records, writing basic SQL queries, and learning table relationships through database diagrams."
      },
      "tools": [
        "MySQL",
        "phpMyAdmin",
        "SQL",
        "MySQL Workbench"
      ],
      "level": {
        "th": "ระดับเริ่มต้น",
        "en": "Beginner"
      },
      "project": "mee-khwam-sook",
      "link": {
        "th": "ดูโครงงานที่ได้ฝึกใช้งาน",
        "en": "View the related student project"
      }
    },
    {
      "number": "04",
      "title": {
        "th": "การเขียนโปรแกรม Python เบื้องต้น",
        "en": "Basic Python programming"
      },
      "description": {
        "th": "เคยฝึกเขียน Python ในระดับพื้นฐานจากการเรียน ยังมีประสบการณ์เพียงเล็กน้อย และกำลังฝึกอ่านโค้ดกับเขียนโปรแกรมให้คล่องขึ้น",
        "en": "Introductory Python practice through coursework. Experience is limited, and I am continuing to improve code reading and basic programming skills."
      },
      "tools": [
        "Python"
      ],
      "level": {
        "th": "ระดับเริ่มต้น",
        "en": "Beginner"
      },
      "project": null,
      "link": {
        "th": "ดูโครงงานที่ได้ฝึกใช้งาน",
        "en": "View the related student project"
      }
    },
    {
      "number": "05",
      "title": {
        "th": "พื้นฐานเครือข่ายคอมพิวเตอร์",
        "en": "Computer networking fundamentals"
      },
      "description": {
        "th": "กำลังเรียนรู้ด้านเครือข่ายผ่านวิชา ICT24167 การบริหารเครือข่ายคอมพิวเตอร์ เพื่อสร้างพื้นฐานความเข้าใจในการบริหารเครือข่าย โดยยังอยู่ในช่วงเริ่มต้น",
        "en": "Currently learning through ICT24167 Computer Network Administration, building an introductory understanding of network administration."
      },
      "tools": [
        "ICT24167",
        "Computer Networking"
      ],
      "level": {
        "th": "ระดับเริ่มต้น",
        "en": "Beginner"
      },
      "project": null,
      "link": {
        "th": "ดูโครงงานที่ได้ฝึกใช้งาน",
        "en": "View the related student project"
      }
    }
  ],
  "experience": [
    {
      "period": {
        "th": "ช่วง ปวช. ปีที่ 3",
        "en": "Vocational Year 3"
      },
      "title": {
        "th": "โครงงานเว็บไซต์ร้านชานมมีความสุข",
        "en": "Mee Khwam Sook website project"
      },
      "organization": {
        "th": "โครงงานระหว่างเรียน · ประสบการณ์เบื้องต้น",
        "en": "Student project · Introductory experience"
      },
      "description": {
        "th": "ฝึกทำเว็บไซต์และทำความเข้าใจการใช้ HTML, PHP, Laravel และฐานข้อมูล ผ่านโครงงานร้านชานมที่มีหน้าร้าน ตะกร้า และส่วนจัดการข้อมูล เป็นประสบการณ์จากการเรียนที่ยังมีขอบเขตจำกัด",
        "en": "Practised website development and explored HTML, PHP, Laravel, and database use through a milk tea project with a storefront, cart, and administration screens. This was a limited-scope learning experience."
      },
      "kind": "project",
      "project": "mee-khwam-sook"
    },
    {
      "period": {
        "th": "งานฝึกระหว่างเรียน",
        "en": "Coursework & practice"
      },
      "title": {
        "th": "ฝึกจัดการฐานข้อมูลและเขียน SQL",
        "en": "Database & SQL practice"
      },
      "organization": {
        "th": "MySQL · phpMyAdmin · MySQL Workbench",
        "en": "MySQL · phpMyAdmin · MySQL Workbench"
      },
      "description": {
        "th": "เคยฝึกดูโครงสร้างตาราง จัดการข้อมูล และใช้คำสั่ง SELECT เพื่อเรียกดูผลลัพธ์ พร้อมทำความเข้าใจความสัมพันธ์ของข้อมูล มีประสบการณ์เพียงเล็กน้อยและยังต้องฝึกเพิ่มเติม",
        "en": "Practised inspecting table structures, managing records, using SELECT, and understanding data relationships. Experience is limited and requires further practice."
      },
      "kind": "practice"
    },
    {
      "period": {
        "th": "แบบฝึกหัดและการเรียนรู้",
        "en": "Exercises & learning"
      },
      "title": {
        "th": "ฝึกเขียนเว็บไซต์และโปรแกรมเบื้องต้น",
        "en": "Basic web & programming exercises"
      },
      "organization": {
        "th": "HTML · PHP · Python",
        "en": "HTML · PHP · Python"
      },
      "description": {
        "th": "เคยผ่านการฝึกใช้ HTML, PHP และ Python จากงานเรียน เพื่อเรียนรู้พื้นฐานการเขียนโค้ด อ่านโค้ด และแก้ไขงานง่าย ๆ ปัจจุบันยังอยู่ในระดับเริ่มต้นและค่อย ๆ พัฒนาความเข้าใจ",
        "en": "Introductory coursework using HTML, PHP, and Python to practise writing and reading code and making small changes. I am still a beginner and gradually building understanding."
      },
      "kind": "practice"
    }
  ],
  "studentId": "68004235",
  "education": [
    {
      "period": {
        "th": "ปวช. ปีที่ 1–3",
        "en": "Vocational Certificate · Years 1–3"
      },
      "title": {
        "th": "ประกาศนียบัตรวิชาชีพ (ปวช.)",
        "en": "Vocational Certificate"
      },
      "organization": {
        "th": "วิทยาลัยเทคโนโลยีพงษ์สวัสดิ์ (PSC)",
        "en": "Pongsawadi Technological College (PSC)"
      },
      "description": {
        "th": "ศึกษาระดับ ปวช. ปีที่ 1–3 ได้ฝึกพื้นฐานการเขียนโปรแกรม การทำเว็บไซต์ และการจัดการฐานข้อมูลผ่านงานเรียนและโครงงาน",
        "en": "Studied vocational Years 1–3, practising programming, website creation, and database basics through coursework and student projects."
      }
    },
    {
      "period": {
        "th": "ปัจจุบัน",
        "en": "Currently studying"
      },
      "title": {
        "th": "ICT · มหาวิทยาลัยศรีปทุม",
        "en": "ICT · Sripatum University"
      },
      "organization": {
        "th": "มหาวิทยาลัยศรีปทุม (SPU)",
        "en": "Sripatum University (SPU)"
      },
      "description": {
        "th": "กำลังศึกษาด้าน ICT รหัสนักศึกษา 68004235 และเรียนรู้เพิ่มเติมในรายวิชา ICT24167 การบริหารเครือข่ายคอมพิวเตอร์",
        "en": "Currently studying ICT, student ID 68004235, including ICT24167 Computer Network Administration."
      }
    }
  ],
  "course": {
    "code": "ICT24167",
    "name": {
      "th": "การบริหารเครือข่ายคอมพิวเตอร์",
      "en": "Computer Network Administration"
    }
  },
  "universityEmail": "aukrit.phu@spumail.net",
  "phone": "092-996-8444"
};
