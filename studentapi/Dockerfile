# Use the official Microsoft .NET SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["studentapi.csproj", "./"]
RUN dotnet restore "studentapi.csproj"
COPY . .
RUN dotnet build "studentapi.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "studentapi.csproj" -c Release -o /app/publish

# Build the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "studentapi.dll"]
