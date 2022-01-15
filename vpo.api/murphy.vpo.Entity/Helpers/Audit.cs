using murphy.vpo.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Entity.Helpers
{
    public class Audit : IEntity, ITrackable
    {
        public Audit()
        {
        }

        public int Id { get; set; }
        public string TableName { get; set; }
        public DateTime DateTime { get; set; }
        public string KeyId { get; set; }
        public string KeyValues { get; set; }
        public string OldValues { get; set; }
        public string NewValues { get; set; }
        public bool IsMailSent { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
