import { CouponSectionProps } from "../../../types";

export const CouponSection = ({ coupons, selectedCoupon, handleApplyCoupon }: CouponSectionProps) => {

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">쿠폰 적용</h2>
      <select
        onChange={(e) => handleApplyCoupon(parseInt(e.target.value))}
        className="w-full p-2 border rounded mb-2"
        aria-label="쿠폰 선택"
      >
        <option value="-1">쿠폰 선택</option>
        {coupons.map((coupon, index) => (
          <option key={coupon.code} value={index}>
            {coupon.name} - {coupon.discountType === "amount" ? `${coupon.discountValue}원` : `${coupon.discountValue}%`}
          </option>
        ))}
      </select>
      {selectedCoupon && (
        <p className="text-green-600">
          적용된 쿠폰: {selectedCoupon.name}
          ({selectedCoupon.discountType === "amount" ? `${selectedCoupon.discountValue}원` : `${selectedCoupon.discountValue}%`} 할인)
        </p>
      )}
    </div>
  );
};