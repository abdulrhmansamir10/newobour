# Codex Technical Specification: New Obour City Advanced Features (Phase 2 & 3)
**Role:** Senior Frontend Engineer & UI/UX Architect
**Project Reference:** newobour.com (New Obour City Ecosystem)
**Target Platform:** Antigravity / Codex AI Code Generator

---

## 1. Global Setup & Design Tokens Review
Ensure the following Tailwind tokens are fully loaded before generating components:
* `bg-primary` / `text-primary`: `#0B1B33` (Deep Navy)
* `bg-accent` / `text-accent`: `#C9983E` (Royal Gold)
* `bg-app`: `#F7F7F5` (Soft White)
* `text-main`: `#2D2D2D` (Graphite)
* All components must support RTL rendering (`dir="rtl"`).

---

## 2. Detailed Feature Specifications

### Feature 1: "Build-It-For-Me" Engine (ابنِ أرضك معنا)
* **Target Interface:** User Dashboard (`/dashboard`)
* **Trigger Condition:** Triggers automatically when a tracked property's state changes to `status === 'license'` (تم الترخيص).
* **UI/UX Component:** * A prominent, stylized alert banner spanning the top of the specific property card. 
  * Background: Solid `#0B1B33` with a subtle gradient accent.
  * Border: Left border (or right border in RTL) 4px thick solid `#C9983E`.
  * Action Button: "احصل على مقايسة مجانية للبناء بالتقسيط" (Gold fill, Navy text, hover scale effect).
* **User Flow & Form State:**
  1. Clicking the button opens a multi-step modal overlay (`BuildRequestModal`).
  2. **Step 1 (Preferences):** Selection grid for building type (Classic Villa, Modern Building, Commercial Hub) and number of floors.
  3. **Step 2 (Financing):** Radio group for payment preference (Cash with discount, 3-year installments, 5-year installments).
  4. **Submission:** Sends data payload to backend and displays a premium success screen containing a dynamic direct link to a dedicated Al-Sawarey construction consultant on WhatsApp.

### Feature 2: Legal Concierge System (خدمة الكونسيرج القانوني)
* **Target Interface:** Ledger Search Screen (`/ledger-search`) & Dashboard.
* **Trigger Condition:** Triggers when a ledger lookup returns a positive match (`status === 'ledger'`) or when a user opts for manual government delegation.
* **UI/UX Component:**
  * Floating context card embedded alongside the search success message.
  * Typography: Large bold header in Deep Navy, with text emphasizing absolute security and time-saving.
  * Action Button: "فوض مستشارينا القانونيين الآن" (Rounded-xl, animated pulse effect to drive conversions).
* **User Flow & Document Upload:**
  1. Opens a secure form gathering official transaction info.
  2. Integrated File Dropzone: Accepts PDF/Images for (صورة بطاقة الرقم القومي, صور عقود الملكية الابتدائية, وصل البريد القديم).
  3. Shows a transparent pricing breakdown table indicating the administrative fees.

### Feature 3: Price Heatmap & Index (مؤشر أسعار العبور الجديدة)
* **Target Interface:** Analytics Portal (`/analytics` or `/price-index`)
* **Data Integration:** Must read directly from the historical arrays in `data.js` and aggregate pricing trends.
* **UI/UX Component:**
  * **Top Metrics Row:** 3 styled summary cards displaying: (1) Average price per sqm in the city, (2) Highest growth district this month, (3) Total active market volume.
  * **Comparative Interactive Grid:** A side-by-side analytical table where users can select two districts (e.g., الحي الأول vs الحي السابع) to compare:
    * Average land price per sqm.
    * Infrastructure completion rate (percentage bar component).
    * Price delta over the last 6 months (indicated with green `▲` or red `▼` icons).
  * Use clean SVG line graphics to plot the 6-month growth curve.

### Feature 4: Premium Document Verification (طلب فحص الأوراق)
* **Target Interface:** Marketplace Item Detail Page (`/marketplace/:id`)
* **Trigger Condition:** Visible ONLY on unverified public listings (`isVerified === false`).
* **UI/UX Component:**
  * A box positioned in the sidebar of the property detail page, underneath the seller contact section.
  * Visual Accent: Styled as a secure vault box with a lock icon from `lucide-react`.
  * Text: "احمِ استثمارك: اطلب فحص السند القانوني لهذه القطعة من الإدارة القانونية بالشركة مقابل 500 ج.م فقط."
* **System Logic & Checkout Flow:**
  1. Clicking initiates an overlay showing an escrow/trust guarantee summary.
  2. Placeholder component for payment gateway selection (Fawry, Vodafone Cash, Credit Card).
  3. Upon completion, the listing status updates internally to `verification_pending`. Once authorized by admin, the listing turns `isVerified: true` globally.

### Feature 5: Plot Consolidation & Partnerships (تجميع الملاك والشراكات)
* **Target Interface:** Marketplace Main Grid (`/marketplace`) & Dashboard Form.
* **UI/UX Component:**
  * **Marketplace Filter:** Add a persistent toggle switch in the advanced sidebar filter: "عرض أراضي الشراكة فقط".
  * **Dashboard Action:** A dedicated card allowing owners of small plots (e.g., 209 sqm) to opt-in to the partnership program.
* **Data Model Extension:**
  * Add a `partnershipTerms` object field to the property schema:
    ```json
    {
      "isPartnership": true,
      "partnershipType": "شراكة بنائية / دمج أرض مجاورة",
      "expectedShare": "50% للمالك / 50% للمطور"
    }
    ```

### Feature 6: Broker Sub-Accounts & Moderation (حسابات السماسرة المعتمدين)
* **Target Interface:** Authentication, Profile Page (`/broker/:id`), and Admin Panel.
* **UI/UX Component:**
  * **Registration Flow:** Commercial tier account signup layout asking for company license number and business name.
  * **Broker Showroom Profile:** A custom public view matching the brand identity, displaying total active listings, corporate logo, and verified badges.
  * **Moderation Queue Dashboard:** Listings uploaded by brokers are tagged with an initial status of `pending_review` in the global state, ensuring they do not appear in public marketplace grids until vetted by admin to eliminate fraudulent listings.
