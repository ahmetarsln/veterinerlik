using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IUserService _userService;
        public AuthController(IAuthService authService, IMapper mapper, IConfiguration config, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            _authService = authService;
            _mapper = mapper;
            _config = config;
            _httpContextAccessor = httpContextAccessor;
            _userService = userService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            var userFromRepo = await _authService.LoginAsync(userLoginDto.Username, userLoginDto.Password);

            if (userFromRepo == null)
                return Unauthorized();


            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier,userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name , userFromRepo.Username)
            };
            var roles = await _authService.GetRolesAsync();
            var userroles = await _authService.GetUserRolesByUserAsync(userFromRepo.Username);


            foreach (var userrole in userroles)
            {
                foreach (var role in roles)
                {
                    if (role.Id == userrole.RoleId)
                        claims.Add(new Claim(ClaimTypes.Role, role.Name));
                }

            }


            var key = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(_config.GetSection("Appsettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var userToReturn = _mapper.Map<UserTokenDto>(userFromRepo);

            return Ok(
                new
                {
                    token = tokenHandler.WriteToken(token),
                    user = userToReturn
                }
            );
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
        {
            userRegisterDto.Username = userRegisterDto.Username.ToLower();

            if (await _authService.UserExitsAsync(userRegisterDto.Username))
                return BadRequest("Username already exits");


            //var userToCreate = new User
            // {
            //    Username = userForRegisterVM.Username
            // };

            var userToCreate = _mapper.Map<User>(userRegisterDto);
            try
            {

                await _authService.RegisterAsync(userToCreate, userRegisterDto.Password);
                var registeredUser = await _authService.GetUserByUsernameAsync(userToCreate.Username);
                var defaulRoleAddedIsTrue = await _authService.AddDefaultRole(registeredUser.Username);
                return Ok();

            }
            catch (Exception ex)
            {
                throw;
            }


            return BadRequest("Internal error");

        }


    }
}
