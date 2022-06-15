using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Customer : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerMail { get; set; }
        public string CustomerAdress { get; set; }
        public string CustomerTel { get; set; }
        public string CustomerNote { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
