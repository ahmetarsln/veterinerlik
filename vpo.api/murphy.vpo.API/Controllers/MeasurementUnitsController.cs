using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeasurementUnitsController : ControllerBase
    {
        private readonly IMeasurementUnitService _measurementUnitService;
        private readonly IMapper _mapper;

        public MeasurementUnitsController(IMeasurementUnitService measurementUnitService, IMapper mapper)
        {
            _measurementUnitService = measurementUnitService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetMeasurementUnitsAsync")]
        public async Task<ActionResult<List<MeasurementUnitDto>>> GetCompanysAsync()
        {
            var measurementUnits = await _measurementUnitService.GetAllAsync();
            if (measurementUnits == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<MeasurementUnitDto>>(measurementUnits));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetMeasurementUnitByIdAsync")]
        public async Task<ActionResult<UserDto>> GetMeasurementUnitByIdAsync(int id)
        {
            var measurementUnit = await _measurementUnitService.GetByIdAsync(id);
            if (measurementUnit == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<MeasurementUnitDto>(measurementUnit));
        }
        // POST api/values
        [HttpPost(Name = "AddMeasurementUnitAsync")]
        public async Task<ActionResult<MeasurementUnitDto>> AddMeasurementUnitAsync(MeasurementUnitDto measurementUnitDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var measurementUnit = _mapper.Map<MeasurementUnit>(measurementUnitDto);

            await _measurementUnitService.AddAsync(measurementUnit);
            return CreatedAtRoute("GetMeasurementUnitByIdAsync", new { id = measurementUnit.Id }, _mapper.Map<MeasurementUnitDto>(measurementUnit));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateMeasurementUnitAsync")]
        public async Task<ActionResult<MeasurementUnitDto>> UpdateMeasurementUnitAsync(int id, [FromBody] MeasurementUnitDto measurementUnitDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != measurementUnitDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _measurementUnitService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var measurementUnit = _mapper.Map<MeasurementUnit>(measurementUnitDto);
            await _measurementUnitService.UpdateAsync(measurementUnit);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveMeasurementUnitAsync")]
        public async Task<ActionResult> RemoveMeasurementUnitAsync(int id)
        {
            var measurementUnitToBeDelete = await _measurementUnitService.GetByIdAsync(id);

            if (measurementUnitToBeDelete == null)
            {
                return NotFound();
            }
            await _measurementUnitService.DeleteAsync(id);

            return NoContent();
        }
    }
}
