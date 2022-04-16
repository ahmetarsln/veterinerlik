using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Product : IEntity, ITrackable, ISoftDeletable
    {

        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductPurchasePrice { get; set; }
        public string ProductSalesPrice { get; set; }
        public string ProductCategory { get; set; }
        public string ProductTaxRate { get; set; }
        public string ProductImage { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
