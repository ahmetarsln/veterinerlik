using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Payment : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string PaymentNameSurname { get; set; }
        public string PaymentTotal { get; set; }
        public string PaymentDate { get; set; }
        public string PaymentExpiryDate { get; set; }
        public string PaymentType { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
