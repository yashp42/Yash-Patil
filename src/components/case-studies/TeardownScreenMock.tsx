interface TeardownScreenMockProps {
  mockType?: string;
  imageUrl?: string;
  hasRedesignActive?: boolean;
  stepNumber?: number;
}

export default function TeardownScreenMock({
  mockType = 'zepto_cart',
  imageUrl,
  hasRedesignActive = false,
}: TeardownScreenMockProps) {
  // If an uploaded custom image is provided, display it inside the phone screen
  if (imageUrl) {
    return (
      <div className="w-full h-full bg-[#18181B] flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt="Screen Mockup"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Professional wireframe mocks matching the site's editorial aesthetic (zero icons, zero emojis)
  switch (mockType) {
    case 'zepto_cart':
      return (
        <div className="w-full h-full bg-[#141413] text-[#FAF9F5] flex flex-col font-sans select-none overflow-hidden text-xs border border-[#282724]">
          {/* Header */}
          <div className="bg-[#1C1B19] px-4 py-3 border-b border-[#282724] flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FAF9F5]" />
              <span className="font-semibold text-[#FAF9F5] uppercase tracking-wide">
                8 Mins to Doorstep
              </span>
            </div>
            <span className="text-[#9A9890] text-[10px]">Indiranagar, BLR</span>
          </div>

          {/* Cart Items List */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            {/* Item 1 */}
            <div className="bg-[#1A1918] p-3 rounded-xs border border-[#282724] flex items-center justify-between">
              <div>
                <p className="font-medium text-[#FAF9F5] text-xs">Cold Brew Can (250ml)</p>
                <p className="text-[10px] text-[#9A9890] mt-0.5">Dark Roast • Single Origin</p>
                <p className="font-mono text-xs text-[#FAF9F5] mt-1">₹95</p>
              </div>
              <div className="border border-[#383733] px-2 py-0.5 rounded-xs font-mono text-[11px] text-[#FAF9F5]">
                1 Added
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#1A1918] p-3 rounded-xs border border-[#282724] flex items-center justify-between">
              <div>
                <p className="font-medium text-[#FAF9F5] text-xs">Toned Fresh Milk (500ml)</p>
                <p className="text-[10px] text-[#9A9890] mt-0.5">Pouch Pack</p>
                <p className="font-mono text-xs text-[#FAF9F5] mt-1">₹28</p>
              </div>
              <div className="border border-[#383733] px-2 py-0.5 rounded-xs font-mono text-[11px] text-[#FAF9F5]">
                1 Added
              </div>
            </div>

            {/* Zeigarnik Progress Goal */}
            <div className="bg-[#1A1918] p-3.5 rounded-xs border border-[#282724] space-y-2">
              <div className="flex justify-between items-center font-mono text-[11px]">
                <span className="text-[#9A9890]">Free Delivery Threshold</span>
                <span className="text-[#FAF9F5] font-semibold">Add ₹76 more</span>
              </div>
              <div className="w-full bg-[#282724] h-1.5 rounded-xs overflow-hidden">
                <div className="bg-[#FAF9F5] h-full w-[62%]" />
              </div>
              <p className="font-mono text-[10px] text-[#73726E]">
                Reach ₹199 to waive ₹25 standard delivery fee
              </p>
            </div>

            {/* Nudge Recommendation */}
            <div className="p-3 border border-[#282724] bg-[#1C1B19] rounded-xs flex items-center justify-between">
              <div>
                <p className="font-medium text-xs text-[#FAF9F5]">Dark Chocolate Bar (55g)</p>
                <p className="font-mono text-[11px] text-[#9A9890]">₹60</p>
              </div>
              <button className="px-2.5 py-1 border border-[#383733] hover:border-[#FAF9F5] text-[#FAF9F5] font-mono text-[10px] rounded-xs transition-colors">
                [+ Add]
              </button>
            </div>
          </div>

          {/* Checkout Bar */}
          <div className="bg-[#1C1B19] p-4 border-t border-[#282724] space-y-2">
            <div className="flex justify-between font-mono text-[11px] text-[#9A9890]">
              <span>Cart Subtotal: <strong className="text-[#FAF9F5]">₹123</strong></span>
              <span>Est. Delivery: ₹25</span>
            </div>
            <div className="w-full py-2.5 bg-[#FAF9F5] text-[#141413] text-center font-mono text-xs font-semibold rounded-xs">
              Proceed to Checkout (₹148) →
            </div>
          </div>
        </div>
      );

    case 'zepto_checkout':
      return (
        <div className="w-full h-full bg-[#141413] text-[#FAF9F5] flex flex-col font-sans select-none overflow-hidden text-xs border border-[#282724]">
          {/* Header */}
          <div className="bg-[#1C1B19] px-4 py-3 border-b border-[#282724] flex items-center justify-between font-mono text-[11px]">
            <span className="font-semibold text-[#FAF9F5] uppercase">Order Review &amp; Bill</span>
            <span className="text-[#9A9890] text-[10px]">Step 2 of 2</span>
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-3 font-mono">
            {/* Delivery address */}
            <div className="p-3 border border-[#282724] bg-[#1A1918] rounded-xs space-y-1">
              <div className="text-[10px] text-[#73726E] uppercase">Delivering to</div>
              <div className="text-xs text-[#FAF9F5] font-sans font-medium">Home • Indiranagar 12th Main</div>
              <div className="text-[10px] text-[#9A9890]">Est. Arrival: 10:53 PM (8 mins)</div>
            </div>

            {/* Bill Summary with Drip Pricing */}
            <div className="p-3.5 border border-[#282724] bg-[#1A1918] rounded-xs space-y-2 text-[11px]">
              <div className="text-[10px] text-[#73726E] uppercase pb-1 border-b border-[#282724]">
                Bill Breakdown
              </div>
              <div className="flex justify-between text-[#9A9890]">
                <span>Items Subtotal</span>
                <span className="text-[#FAF9F5]">₹123.00</span>
              </div>
              <div className="flex justify-between text-[#9A9890]">
                <span>Standard Delivery Fee</span>
                <span className="text-[#FAF9F5]">₹25.00</span>
              </div>
              
              {/* Handling fee highlight */}
              <div className="flex justify-between text-[#FAF9F5] bg-[#22211E] p-1.5 rounded-xs border border-[#383733]">
                <div>
                  <span>Handling Fee (High Demand)</span>
                  <span className="block text-[9px] text-[#73726E] mt-0.5">Added at final step</span>
                </div>
                <span>+ ₹16.00</span>
              </div>

              {/* Tipping default */}
              <div className="pt-2 border-t border-[#282724]">
                <div className="flex justify-between text-[#9A9890] mb-1.5">
                  <span>Delivery Partner Tip (Pre-selected)</span>
                  <span className="text-[#FAF9F5]">₹20.00</span>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[10px]">
                  <span className="border border-[#282724] text-center py-1 text-[#73726E]">₹10</span>
                  <span className="border border-[#FAF9F5] text-center py-1 text-[#FAF9F5] font-semibold bg-[#22211E]">₹20 [x]</span>
                  <span className="border border-[#282724] text-center py-1 text-[#73726E]">₹30</span>
                  <span className="border border-[#282724] text-center py-1 text-[#73726E]">Other</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#282724] flex justify-between font-semibold text-xs text-[#FAF9F5]">
                <span>To Pay (Original Cart was ₹123)</span>
                <span>₹184.00</span>
              </div>
            </div>
          </div>

          {/* Bottom Pay Button */}
          <div className="bg-[#1C1B19] p-4 border-t border-[#282724]">
            <div className="w-full py-2.5 bg-[#FAF9F5] text-[#141413] text-center font-mono text-xs font-semibold rounded-xs">
              Pay ₹184 via UPI →
            </div>
          </div>
        </div>
      );

    case 'bajaj_loan_approval':
      return (
        <div className="w-full h-full bg-[#141413] text-[#FAF9F5] flex flex-col font-sans select-none overflow-hidden text-xs border border-[#282724]">
          {/* Header */}
          <div className="bg-[#1C1B19] px-4 py-3 border-b border-[#282724] flex items-center justify-between font-mono text-[11px]">
            <span className="font-semibold text-[#FAF9F5] uppercase">Bajaj Finserv InstaLoan</span>
            <span className="text-[#9A9890] text-[10px]">Pre-Approved</span>
          </div>

          <div className="p-4 flex-1 overflow-y-auto space-y-3 font-mono">
            {/* Offer banner */}
            <div className="p-4 border border-[#282724] bg-[#1A1918] rounded-xs space-y-1.5">
              <div className="text-[10px] text-[#73726E] uppercase tracking-wide">Sanctioned Credit Limit</div>
              <div className="font-serif text-2xl font-normal text-[#FAF9F5]">₹2,50,000</div>
              <p className="text-[10px] text-[#9A9890] font-sans">
                Approved based on Experian score 785 • Instant Bank Transfer
              </p>
            </div>

            {/* Default tenure selection */}
            <div className="p-3.5 border border-[#282724] bg-[#1A1918] rounded-xs space-y-2">
              <div className="text-[10px] text-[#73726E] uppercase">Select Repayment Tenure</div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                <div className="p-2 border border-[#282724] text-[#73726E]">
                  <div>12 Mos</div>
                  <div className="mt-1">₹22,450/m</div>
                </div>
                <div className="p-2 border border-[#FAF9F5] bg-[#22211E] text-[#FAF9F5] font-semibold">
                  <div>24 Mos [x]</div>
                  <div className="mt-1">₹12,180/m</div>
                </div>
                <div className="p-2 border border-[#282724] text-[#73726E]">
                  <div>36 Mos</div>
                  <div className="mt-1">₹8,920/m</div>
                </div>
              </div>
            </div>

            {/* Insurance Bundling */}
            <div className={`p-3 border rounded-xs transition-colors ${
              hasRedesignActive 
                ? 'border-[#282724] bg-[#1A1918] text-[#9A9890]' 
                : 'border-[#383733] bg-[#22211E] text-[#FAF9F5]'
            }`}>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-semibold text-xs text-[#FAF9F5]">
                    {hasRedesignActive ? 'Optional Loan Shield' : 'Loan Protection Shield (Pre-selected)'}
                  </div>
                  <div className="text-[10px] text-[#9A9890] mt-0.5 font-sans">
                    ₹4,890 one-time premium added directly to loan principal
                  </div>
                </div>
                <div className="border border-[#FAF9F5] px-1.5 py-0.5 text-[10px]">
                  {hasRedesignActive ? '[ ]' : '[x]'}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1C1B19] p-4 border-t border-[#282724]">
            <div className="w-full py-2.5 bg-[#FAF9F5] text-[#141413] text-center font-mono text-xs font-semibold rounded-xs">
              Confirm &amp; Disburse to Bank →
            </div>
          </div>
        </div>
      );

    case 'bajaj_disbursal':
      return (
        <div className="w-full h-full bg-[#141413] text-[#FAF9F5] flex flex-col font-sans select-none overflow-hidden text-xs border border-[#282724]">
          <div className="bg-[#1C1B19] px-4 py-3 border-b border-[#282724] flex items-center justify-between font-mono text-[11px]">
            <span className="font-semibold text-[#FAF9F5] uppercase">Disbursal in Progress</span>
            <span className="text-[#9A9890] text-[10px]">Status: Active</span>
          </div>

          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center space-y-4 font-mono">
            <div className="w-10 h-10 rounded-xs border border-[#FAF9F5] flex items-center justify-center text-base font-serif">
              ₹
            </div>

            <div>
              <div className="text-xs uppercase text-[#73726E] tracking-wider">NEFT Transfer Initiated</div>
              <div className="font-serif text-3xl text-[#FAF9F5] font-normal mt-1">₹2,42,110</div>
              <p className="text-[10px] text-[#9A9890] mt-1 font-sans">
                (After ₹3,000 processing fee + ₹4,890 insurance deduction)
              </p>
            </div>

            <div className="w-full max-w-xs p-3 border border-[#282724] bg-[#1A1918] rounded-xs text-[11px] text-left space-y-1">
              <div className="text-[10px] text-[#73726E] uppercase">Beneficiary Account</div>
              <div className="text-[#FAF9F5]">HDFC Bank • Ending in 4921</div>
              <div className="text-[#9A9890] text-[10px]">Reference: BF-2026-9482103</div>
            </div>
          </div>

          <div className="bg-[#1C1B19] p-4 border-t border-[#282724]">
            <div className="w-full py-2 border border-[#282724] text-[#9A9890] text-center font-mono text-xs rounded-xs">
              View Disbursal Receipt
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#141413] text-[#FAF9F5] flex flex-col items-center justify-center p-6 text-center font-mono border border-[#282724]">
          <div className="text-xs uppercase text-[#73726E] tracking-wider">Product Wireframe</div>
          <div className="font-serif text-lg text-[#FAF9F5] mt-1">Screen Flow Walkthrough</div>
          <p className="text-[11px] text-[#9A9890] max-w-xs mt-2 font-sans font-light">
            Visual breakdown highlighting interface cues, friction points, and behavioral defaults.
          </p>
        </div>
      );
  }
}
