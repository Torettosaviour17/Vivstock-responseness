import { BsCurrencyDollar, BsHash } from 'react-icons/bs';
import { TbArrowsExchange2 } from 'react-icons/tb';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ExpireTime from './ExpireTime';

function StockMetrics({ price }) {
  return (
    <div className="w-screen pr-8 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-transparent rounded-lg pr-8 w-full sm:w-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BsCurrencyDollar size={20} className="text-[#00B087]" />
              <span className="text-sm">Open price</span>
            </div>
            <span className="font-semibold text-sm">₦{price}</span>
          </div>
        </div>

        <div className="bg-transparent rounded-lg pr-8 w-full sm:w-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BsHash size={20} className="text-[#00B087]" />
              <span className="text-sm">Volume (24hrs)</span>
            </div>
            <span className="font-semibold text-sm text-white">0</span>
          </div>
        </div>
            <ExpireTime />

      </div>
    </div>
  );
}

export default StockMetrics;
