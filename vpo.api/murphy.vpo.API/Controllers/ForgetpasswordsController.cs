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
    public class ForgetpasswordsController : ControllerBase
    {
        private readonly IForgetpasswordService _forgetpasswordService;
        private readonly IMapper _mapper;

        public ForgetpasswordsController(IForgetpasswordService forgetpasswordService, IMapper mapper)
        {
            _forgetpasswordService = forgetpasswordService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetForgetpasswordsAsync")]
        public async Task<ActionResult<List<ForgetpasswordDto>>> GetCompanysAsync()
        {
            var forgetpasswords = await _forgetpasswordService.GetAllAsync();
            if (forgetpasswords == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<ForgetpasswordDto>>(forgetpasswords));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetForgetpasswordByIdAsync")]
        public async Task<ActionResult<UserDto>> GetForgetpasswordByIdAsync(int id)
        {
            var forgetpassword = await _forgetpasswordService.GetByIdAsync(id);
            if (forgetpassword == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<ForgetpasswordDto>(forgetpassword));
        }
        // POST api/values
        [HttpPost(Name = "AddForgetpasswordAsync")]
        public async Task<ActionResult<ForgetpasswordDto>> AddForgetpasswordAsync(ForgetpasswordDto forgetpasswordDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var forgetpassword = _mapper.Map<Forgetpassword>(forgetpasswordDto);

            await _forgetpasswordService.AddAsync(forgetpassword);
            return CreatedAtRoute("GetForgetpasswordByIdAsync", new { id = forgetpassword.Id }, _mapper.Map<ForgetpasswordDto>(forgetpassword));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateForgetpasswordAsync")]
        public async Task<ActionResult<ForgetpasswordDto>> UpdateForgetpasswordAsync(int id, [FromBody] ForgetpasswordDto forgetpasswordDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != forgetpasswordDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _forgetpasswordService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var forgetpassword = _mapper.Map<Forgetpassword>(forgetpasswordDto);
            await _forgetpasswordService.UpdateAsync(forgetpassword);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveForgetpasswordAsync")]
        public async Task<ActionResult> RemoveForgetpasswordAsync(int id)
        {
            var forgetpasswordToBeDelete = await _forgetpasswordService.GetByIdAsync(id);

            if (forgetpasswordToBeDelete == null)
            {
                return NotFound();
            }
            await _forgetpasswordService.DeleteAsync(id);

            return NoContent();
        }
    }
}
