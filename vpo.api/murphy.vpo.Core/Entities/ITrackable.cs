using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.Core.Entities
{
    public interface ITrackable
    {
        string CreatedBy { set; get; }
        DateTime CreatedAt { get; set; }
        string ModifiedBy { set; get; }
        DateTime ModifiedAt { get; set; }
    }
}
