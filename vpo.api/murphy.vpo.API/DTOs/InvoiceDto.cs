using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class InvoiceDto
    {
        public int id { get; set; }
        public string InvoiceNumberPrefix { get; set; }
        public string InvoiceNoNumber { get; set; }
        public string InvoiceNextNo { get; set; }
        public string PaymentTerms { get; set; }
        public string InvoiceHeader { get; set; }
        public string InvoiceSubtitle { get; set; }
        public string InvoiceDescription { get; set; }
        public string InvoiceFooter { get; set; }
    }
}
