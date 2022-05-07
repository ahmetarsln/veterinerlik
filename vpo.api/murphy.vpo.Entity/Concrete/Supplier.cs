using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Supplier : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string SupplierName { get; set; }
        public string SupplierTel { get; set; }
        public string SupplierAuth { get; set; }
        public string SupplierAdress { get; set; }
        public string SupplierCurrency { get; set; }
        public string SupplierMail { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
