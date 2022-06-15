using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Invoice : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string InvoiceNumberPrefix { get; set; }
        public string InvoiceNoNumber{ get; set; }
        public string InvoiceNextNo { get; set; }
        public string PaymentTerms { get; set; }
        public string InvoiceHeader { get; set; }
        public string InvoiceSubtitle { get; set; }
        public string InvoiceDescription { get; set; }
        public string InvoiceFooter { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }

    }
}
