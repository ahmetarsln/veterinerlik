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
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UsersController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetUsersAsync")]
        public async Task<ActionResult<List<UserDto>>> GetCompanysAsync()
        {
            var users = await _userService.GetAllAsync();
            if (users == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<UserDto>>(users));

        }

        // POST api/values
        [HttpPost(Name = "AddUserAsync")]
        public async Task<ActionResult<UserDto>> AddUserAsync(UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = _mapper.Map<User>(userDto);

            await _userService.AddAsync(user);
            return CreatedAtRoute("GetUserByIdAsync", new { id = user.Id }, _mapper.Map<UserDto>(user));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdateUserAsync")]
        public async Task<ActionResult<UserDto>> UpdateUserAsync(int id, [FromBody] UserDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != userDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _userService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var user = _mapper.Map<User>(userDto);
            await _userService.UpdateAsync(user);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemoveUserAsync")]
        public async Task<ActionResult> RemoveUserAsync(int id)
        {
            var userToBeDelete = await _userService.GetByIdAsync(id);

            if (userToBeDelete == null)
            {
                return NotFound();
            }
            await _userService.DeleteAsync(id);

            return NoContent();
        }


    }
}
