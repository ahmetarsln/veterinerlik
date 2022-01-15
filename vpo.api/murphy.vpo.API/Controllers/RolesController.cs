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
    public class RolesController : ControllerBase
    {
        private readonly IRoleService _roleService;
        private readonly IMapper _mapper;

        public RolesController(IRoleService roleService, IMapper mapper)
        {
            _roleService = roleService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetRolesAsync")]
        public async Task<ActionResult<List<RoleDto>>> GetCompanysAsync()
        {
            var roles = await _roleService.GetAllAsync();
            if (roles == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<RoleDto>>(roles));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetRoleByIdAsync")]
        public async Task<ActionResult<RoleDto>> GetRoleByIdAsync(int id)
        {
            var role = await _roleService.GetByIdAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<RoleDto>(role));
        }
        // POST api/values
        [HttpPost(Name = "AddRoleAsync")]
        public async Task<ActionResult<RoleDto>> AddRoleAsync(RoleDto roleDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var role = _mapper.Map<Role>(roleDto);

            await _roleService.AddAsync(role);
            return CreatedAtRoute("GetRoleByIdAsync", new { id = role.Id }, _mapper.Map<RoleDto>(role));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateRoleAsync")]
        public async Task<ActionResult<RoleDto>> UpdateRoleAsync(int id, [FromBody] RoleDto roleDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != roleDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _roleService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var role = _mapper.Map<Role>(roleDto);
            await _roleService.UpdateAsync(role);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveRoleAsync")]
        public async Task<ActionResult> RemoveRoleAsync(int id)
        {
            var roleToBeDelete = await _roleService.GetByIdAsync(id);

            if (roleToBeDelete == null)
            {
                return NotFound();
            }
            await _roleService.DeleteAsync(id);

            return NoContent();
        }


    }
}
