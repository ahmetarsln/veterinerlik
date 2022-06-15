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
    public class ParametersController : ControllerBase
    {
        private readonly IParameterService _parameterService;
        private readonly IMapper _mapper;

        public ParametersController(IParameterService parameterService, IMapper mapper)
        {
            _parameterService = parameterService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetParametersAsync")]
        public async Task<ActionResult<List<ParameterDto>>> GetCompanysAsync()
        {
            var parameters = await _parameterService.GetAllAsync();
            if (parameters == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ParameterDto>>(parameters));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetParameterByIdAsync")]
        public async Task<ActionResult<UserDto>> GetParameterByIdAsync(int id)
        {
            var parameter = await _parameterService.GetByIdAsync(id);
            if (parameter == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ParameterDto>(parameter));
        }
        // POST api/values
        [HttpPost(Name = "AddParameterAsync")]
        public async Task<ActionResult<ParameterDto>> AddParameterAsync(ParameterDto parameterDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var parameter = _mapper.Map<Parameter>(parameterDto);

            await _parameterService.AddAsync(parameter);
            return CreatedAtRoute("GetParameterByIdAsync", new { id = parameter.Id }, _mapper.Map<ParameterDto>(parameter));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateParameterAsync")]
        public async Task<ActionResult<ParameterDto>> UpdateParameterAsync(int id, [FromBody] ParameterDto parameterDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != parameterDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _parameterService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var parameter = _mapper.Map<Parameter>(parameterDto);
            await _parameterService.UpdateAsync(parameter);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveParameterAsync")]
        public async Task<ActionResult> RemoveParameterAsync(int id)
        {
            var parameterToBeDelete = await _parameterService.GetByIdAsync(id);

            if (parameterToBeDelete == null)
            {
                return NotFound();
            }
            await _parameterService.DeleteAsync(id);

            return NoContent();
        }
    }
}
