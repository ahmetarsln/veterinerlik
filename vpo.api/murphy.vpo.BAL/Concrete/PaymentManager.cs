using murphy.vpo.BAL.Abstract;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Concrete
{
    public class PaymentManager : IPaymentService
    {
        private readonly IPaymentDal _paymentDal;

        public PaymentManager(IPaymentDal paymentDal)
        {
            _paymentDal = paymentDal;
        }

        public async Task AddAsync(Payment payment)
        {
            await _paymentDal.AddAsync(payment, true);
        }

        public async Task DeleteAsync(int paymentId)
        {
            await _paymentDal.DeleteAsync(paymentId, true);
        }

        public async Task<IList<Payment>> GetAllAsync()
        {
            return await _paymentDal.GetAllAsync();
        }

        public async Task<Payment> GetByIdAsync(int paymentId)
        {
            return await _paymentDal.GetByIdAsync(paymentId);
        }

        public async Task UpdateAsync(Payment payment)
        {
            await _paymentDal.UpdateAsync(payment, payment.Id, true);
        }
    }
}
