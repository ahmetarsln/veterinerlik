using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.DTOs
{
    public class ProductDto
    {
        public int id { get; set; }
        public string ProductName { get; set; }
        public string ProductPurchasePrice { get; set; }
        public string ProductSalesPrice { get; set; }
        public string ProductCategory { get; set; }
        public string ProductTaxRate { get; set; }
        public string ProductImage { get; set; }
    }
}
