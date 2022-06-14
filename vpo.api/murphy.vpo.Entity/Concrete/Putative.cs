using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class Putative : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string CurrencyUnit { get; set; }
        public string TaxRate { get; set; }
        public string Language { get; set; }
        public string NumberOfRecordsPerPage { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
