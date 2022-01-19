using murphy.vpo.BAL.Abstract;
using murphy.vpo.DAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.BAL.Concrete
{
    public class AppointmentManager : IAppointmentService
    {
        private readonly IAppointmentDal _AppointmentDal;
        public AppointmentManager(IAppointmentDal AppointmentDal)
        {
            _AppointmentDal = AppointmentDal;
        }
        public async Task AddAsync(Appointment Appointment)
        {
            await _AppointmentDal.AddAsync(Appointment, true);
        }

        public async Task DeleteAsync(int AppointmentId)
        {
            await _AppointmentDal.DeleteAsync(AppointmentId, true);
        }

        public async Task<IList<Appointment>> GetAllAsync()
        {
            return await _AppointmentDal.GetAllAsync();
        }

        public async Task<Appointment> GetByIdAsync(int AppointmentId)
        {
            return await _AppointmentDal.GetByIdAsync(AppointmentId);
        }

        public async Task UpdateAsync(Appointment Appointment)
        {
            await _AppointmentDal.UpdateAsync(Appointment, Appointment.Id, true);
        }
    }
}
