using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager _config = builder.Configuration;

var services = builder.Services;
services.AddApplicationServices(_config);

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerServices();
services.AddCors();
services.AddIdentityServices(_config);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));

app.UseAuthentication(); // need to come before authorization.

app.UseAuthorization();

app.MapControllers();

app.Run();
