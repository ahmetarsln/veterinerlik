using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;
        private readonly IMapper _mapper;

        public AppointmentsController(IAppointmentService appointmentService, IMapper mapper)
        {
            _appointmentService = appointmentService;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet(Name = "GetAppointmentsAsync")]
        public async Task<ActionResult<List<AppointmentDto>>> GetCompanysAsync()
        {
            var appointments = await _appointmentService.GetAllAsync();
            if (appointments == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<AppointmentDto>>(appointments));

        }

        // POST api/values
        [HttpPost(Name = "AddAppointmentAsync")]
        public async Task<ActionResult<AppointmentDto>> AddAppointmentAsync(AppointmentDto appointmentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var appointment = _mapper.Map<Appointment>(appointmentDto);

            await _appointmentService.AddAsync(appointment);
            return CreatedAtRoute("GetAppointmentByIdAsync", new { id = appointment.Id }, _mapper.Map<AppointmentDto>(appointment));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateAppointmentAsync")]
        public async Task<ActionResult<AppointmentDto>> UpdateAppointmentAsync(int id, [FromBody] AppointmentDto appointmentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != appointmentDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _appointmentService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var appointment = _mapper.Map<Appointment>(appointmentDto);
            await _appointmentService.UpdateAsync(appointment);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveAppointmentAsync")]
        public async Task<ActionResult> RemoveAppointmentAsync(int id)
        {
            var appointmentToBeDelete = await _appointmentService.GetByIdAsync(id);

            if (appointmentToBeDelete == null)
            {
                return NotFound();
            }
            await _appointmentService.DeleteAsync(id);

            return NoContent();
        }
    }
}
