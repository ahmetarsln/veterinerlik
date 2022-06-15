using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using murphy.vpo.Core.Entities;

namespace murphy.vpo.Entity.Concrete
{
    public class CurrencyUnit : IEntity, ITrackable, ISoftDeletable
    {
        public int Id { get; set; }
        public string CurrencyUnitName { get; set; }
        public string CurrencyUnitCode { get; set; }
        public string CurrencyUnitRate { get; set; }
        public string CurrencyUnitActivityStatus { get; set; }

        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
