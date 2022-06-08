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
    public class InvoiceManager : IInvoiceService
    {
        private readonly IInvoiceDal _invoiceDal;

        public InvoiceManager(IInvoiceDal invoiceDal)
        {
            _invoiceDal = invoiceDal;
        }

        public async Task AddAsync(Invoice invoice)
        {
            await _invoiceDal.AddAsync(invoice, true);
        }

        public async Task DeleteAsync(int invoiceId)
        {
            await _invoiceDal.DeleteAsync(invoiceId, true);
        }

        public async Task<IList<Invoice>> GetAllAsync()
        {
            return await _invoiceDal.GetAllAsync();
        }

        public async Task<Invoice> GetByIdAsync(int invoiceId)
        {
            return await _invoiceDal.GetByIdAsync(invoiceId);
        }

        public async Task UpdateAsync(Invoice invoice)
        {
            await _invoiceDal.UpdateAsync(invoice, invoice.Id, true);
        }
    }
}
