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
    public class PutativesController : ControllerBase
    {
        private readonly IPutativeService _putativeService;
        private readonly IMapper _mapper;

        public PutativesController(IPutativeService putativeService, IMapper mapper)
        {
            _putativeService = putativeService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetPutativesAsync")]
        public async Task<ActionResult<List<PutativeDto>>> GetCompanysAsync()
        {
            var putatives = await _putativeService.GetAllAsync();
            if (putatives == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<PutativeDto>>(putatives));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetPutativeByIdAsync")]
        public async Task<ActionResult<UserDto>> GetPutativeByIdAsync(int id)
        {
            var putative = await _putativeService.GetByIdAsync(id);
            if (putative == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<PutativeDto>(putative));
        }
        // POST api/values
        [HttpPost(Name = "AddPutativeAsync")]
        public async Task<ActionResult<PutativeDto>> AddPutativeAsync(PutativeDto putativeDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var putative = _mapper.Map<Putative>(putativeDto);

            await _putativeService.AddAsync(putative);
            return CreatedAtRoute("GetPutativeByIdAsync", new { id = putative.Id }, _mapper.Map<PutativeDto>(putative));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdatePutativeAsync")]
        public async Task<ActionResult<PutativeDto>> UpdatePutativeAsync(int id, [FromBody] PutativeDto putativeDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != putativeDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _putativeService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var putative = _mapper.Map<Putative>(putativeDto);
            await _putativeService.UpdateAsync(putative);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemovePutativeAsync")]
        public async Task<ActionResult> RemovePutativeAsync(int id)
        {
            var putativeToBeDelete = await _putativeService.GetByIdAsync(id);

            if (putativeToBeDelete == null)
            {
                return NotFound();
            }
            await _putativeService.DeleteAsync(id);

            return NoContent();
        }
    }
}
