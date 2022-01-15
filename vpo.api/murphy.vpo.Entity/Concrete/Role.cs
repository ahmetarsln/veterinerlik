using murphy.vpo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Entity.Concrete
{
    public class Role : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }

        /* EF Relations */
        public virtual ICollection<UserRole> UserRole { get; set; }
    }
}
