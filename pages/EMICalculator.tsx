import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Calculator, DollarSign, PieChart, Calendar, ChevronDown, ChevronUp, Info } from 'lucide-react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(2500000);
  const [interest, setInterest] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(20);

  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [chartData, setChartData] = useState({ principal: 0, interest: 0 });
  
  const [showSchedule, setShowSchedule] = useState(false);
  const [schedule, setSchedule] = useState<any[]>([]);

  useEffect(() => {
    const principal = amount;
    const rate = interest / 12 / 100;
    const time = tenure * 12;

    if (principal > 0 && rate > 0 && time > 0) {
      const emiCalc = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      const totalPayable = emiCalc * time;
      const totalInt = totalPayable - principal;

      setEmi(Math.round(emiCalc));
      setTotalAmount(Math.round(totalPayable));
      setTotalInterest(Math.round(totalInt));

      // Chart Data percentages
      const total = totalPayable;
      setChartData({
        principal: (principal / total) * 100,
        interest: (totalInt / total) * 100
      });

      // Generate Year-wise Schedule
      let balance = principal;
      const newSchedule = [];
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;

      for (let i = 1; i <= time; i++) {
        const interestForMonth = balance * rate;
        const principalForMonth = emiCalc - interestForMonth;
        balance -= principalForMonth;
        
        yearlyInterest += interestForMonth;
        yearlyPrincipal += principalForMonth;

        // Add to schedule at the end of each year or final month
        if (i % 12 === 0 || i === time) {
             newSchedule.push({
                 year: Math.ceil(i / 12),
                 principal: Math.round(yearlyPrincipal),
                 interest: Math.round(yearlyInterest),
                 balance: Math.round(balance < 0 ? 0 : balance),
                 totalPayment: Math.round(yearlyPrincipal + yearlyInterest)
             });
             yearlyInterest = 0;
             yearlyPrincipal = 0;
        }
      }
      setSchedule(newSchedule);
    }
  }, [amount, interest, tenure]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // SVG Donut Chart Component
  const DonutChart = () => {
     const radius = 70;
     const circumference = 2 * Math.PI * radius;
     const interestOffset = circumference - (chartData.interest / 100) * circumference;
     
     return (
         <div className="relative w-64 h-64 flex items-center justify-center mx-auto my-6">
             <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90 drop-shadow-xl">
                 {/* Background Circle (Principal - Indigo) */}
                 <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#e0e7ff" strokeWidth="20" />
                 <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#4f46e5" strokeWidth="20" strokeDasharray={circumference} strokeDashoffset={(100 - chartData.principal)/100 * circumference} />
                 
                 {/* Foreground Circle (Interest - Pink) */}
                 <circle 
                    cx="100" 
                    cy="100" 
                    r={radius} 
                    fill="transparent" 
                    stroke="#ec4899" 
                    strokeWidth="20" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={interestOffset}
                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                 />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none pt-2">
                 <span className="text-3xl font-bold text-slate-800">{Math.round(chartData.principal)}%</span>
                 <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Loan</span>
             </div>
         </div>
     );
  };

  return (
    <div className="bg-slate-50 min-h-screen font-poppins">
      <PageHeader 
        title="Smart EMI Calculator" 
        bgImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80" 
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Financial Planning Made Easy</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Calculate your monthly mortgage or loan payments instantly. Visualize your total liability and plan your finances better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* INPUTS SECTION */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
               <Calculator className="w-6 h-6 text-purple-600" /> Loan Details
            </h3>
            
            {/* Loan Amount */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-base font-bold text-slate-700">Loan Amount</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all">
                   <span className="text-slate-400 font-bold mr-1">₹</span>
                   <input 
                      type="number" 
                      value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))} 
                      className="bg-transparent outline-none w-32 font-bold text-slate-800 text-right"
                   />
                </div>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                <span>₹1 Lac</span>
                <span>₹1 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-base font-bold text-slate-700">Interest Rate (% P.A.)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 transition-all">
                   <input 
                      type="number" 
                      value={interest} 
                      onChange={(e) => setInterest(Number(e.target.value))} 
                      className="bg-transparent outline-none w-16 font-bold text-slate-800 text-right"
                   />
                   <span className="text-slate-400 font-bold ml-1">%</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600 hover:accent-pink-700"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-base font-bold text-slate-700">Loan Tenure (Years)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus-within:border-slate-500 focus-within:ring-2 focus-within:ring-slate-200 transition-all">
                   <input 
                      type="number" 
                      value={tenure} 
                      onChange={(e) => setTenure(Number(e.target.value))} 
                      className="bg-transparent outline-none w-16 font-bold text-slate-800 text-right"
                   />
                   <span className="text-slate-400 font-bold ml-1">Yr</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600 hover:accent-slate-700"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium uppercase tracking-wider">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="lg:col-span-1 space-y-6">
             {/* Main Summary Card */}
             <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Your Monthly EMI</p>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6 bg-slate-50 py-4 rounded-2xl border border-slate-100">
                   {formatCurrency(emi)}
                </h3>
                
                {/* Donut Chart */}
                <DonutChart />

                <div className="space-y-4 mt-8 text-left">
                   <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                         <span className="text-sm font-bold text-slate-700">Principal</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">{formatCurrency(amount)}</span>
                   </div>
                   <div className="flex items-center justify-between p-3 rounded-xl bg-pink-50 border border-pink-100">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-pink-600"></div>
                         <span className="text-sm font-bold text-slate-700">Interest</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">{formatCurrency(totalInterest)}</span>
                   </div>
                   <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-sm font-bold text-slate-500 uppercase">Total Payable</span>
                      <span className="text-lg font-bold text-slate-900">{formatCurrency(totalAmount)}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Schedule Toggle Button */}
        <div className="mt-12 text-center">
           <button 
              onClick={() => setShowSchedule(!showSchedule)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-500/30"
           >
              {showSchedule ? 'Hide Schedule' : 'View Repayment Schedule'}
              {showSchedule ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
           </button>
        </div>

        {/* Amortization Schedule Table */}
        {showSchedule && (
           <div className="mt-12 animate-in slide-in-from-bottom-10 fade-in duration-500">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                 <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                       <Calendar className="w-5 h-5 text-purple-400" /> Yearly Breakdown
                    </h3>
                    <p className="text-sm text-slate-400">Year-wise principal & interest distribution</p>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                             <th className="p-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Year</th>
                             <th className="p-4 text-sm font-bold text-indigo-600 uppercase tracking-wider">Principal</th>
                             <th className="p-4 text-sm font-bold text-pink-600 uppercase tracking-wider">Interest</th>
                             <th className="p-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Total Payment</th>
                             <th className="p-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Balance</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                          {schedule.map((row) => (
                             <tr key={row.year} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-bold text-slate-900">{row.year}</td>
                                <td className="p-4 font-medium text-indigo-600">{formatCurrency(row.principal)}</td>
                                <td className="p-4 font-medium text-pink-600">{formatCurrency(row.interest)}</td>
                                <td className="p-4 font-medium text-slate-600">{formatCurrency(row.totalPayment)}</td>
                                <td className="p-4 font-medium text-slate-400">{formatCurrency(row.balance)}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl flex items-start gap-3">
           <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
           <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> This calculator provides indicative figures for planning purposes only. Actual loan terms, processing fees, and interest rates may vary based on bank policies and your credit profile.
           </p>
        </div>

      </section>
    </div>
  );
};

export default EMICalculator;